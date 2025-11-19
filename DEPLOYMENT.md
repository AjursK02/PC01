# AWS EC2 Deployment Guide

Simple guide to deploy Penaca Circular Solutions website to AWS EC2 using GitHub Actions.

---

## Prerequisites

- AWS EC2 instance (Ubuntu 20.04 or later)
- GitHub repository
- SSH access to EC2 instance

---

## Step 1: Launch EC2 Instance

1. Go to **AWS Console → EC2 → Launch Instance**
2. Choose **Ubuntu Server 20.04 LTS** or later
3. Select instance type: **t2.micro** (free tier) or **t2.small** (recommended)
4. Configure Security Group:
   - **SSH (22)** - From your IP
   - **HTTP (80)** - From anywhere (0.0.0.0/0) - **Required for website access**
   - **HTTPS (443)** - From anywhere (0.0.0.0/0) - Optional, for SSL later
5. Create or select a key pair for SSH access
6. Launch instance and note the **Public IP**

---

## Step 2: Set Up EC2 Server

### Connect to EC2

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx (for port 80 reverse proxy)
sudo apt install -y nginx

# Create app directory
mkdir -p /home/ubuntu/app/current/logs
```

### Set Up PM2 Startup

```bash
pm2 startup systemd
```

Run the command shown in the output (it will look like):
```bash
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
```

**Note:** Nginx will be automatically configured during the first deployment. No manual setup needed!

---

## Step 3: Configure GitHub Secrets

1. Go to your **GitHub repository**
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **New repository secret**
4. Add these 3 secrets:

### Secret 1: EC2_HOST
- **Name:** `EC2_HOST`
- **Value:** Your EC2 public IP
- **Example:** `54.123.45.67`

### Secret 2: EC2_USER
- **Name:** `EC2_USER`
- **Value:** `ubuntu`

### Secret 3: EC2_SSH_KEY
- **Name:** `EC2_SSH_KEY`
- **Value:** Full content of your private key file

To get your SSH key content:
```bash
cat your-key.pem
```

Copy **everything** including:
```
-----BEGIN RSA PRIVATE KEY-----
...key content...
-----END RSA PRIVATE KEY-----
```

---

## Step 4: Deploy

Push to the `main` or `master` branch:

```bash
git add .
git commit -m "Deploy to EC2"
git push origin main
```

GitHub Actions will automatically:
1. Build your Next.js application
2. Create deployment package
3. Transfer to EC2
4. Stop old app
5. Install dependencies
6. Start new app with PM2

---

## Step 5: Verify Deployment

### Check GitHub Actions

1. Go to **Actions** tab in GitHub
2. Click on the latest workflow run
3. Verify all steps completed successfully

### Check Application

Visit your EC2 public IP (on port 80 - no need for :3000):
```
http://your-ec2-ip
```

The deployment automatically sets up Nginx to proxy port 80 to your Next.js app on port 3000.

### Check PM2 Status

SSH to EC2 and run:

```bash
pm2 status
pm2 logs penaca-app
```

---

## Troubleshooting

### Website Not Accessible

**1. Check Security Group**
   - Go to AWS Console → EC2 → Security Groups
   - Ensure port **80** (HTTP) is open to **0.0.0.0/0**
   - This is required for the website to be accessible

**2. Check PM2 Status**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   pm2 status
   pm2 logs penaca-app
   ```

**3. Check if Services are Running**
   ```bash
   # Check Nginx
   sudo systemctl status nginx
   
   # Check if port 80 is listening
   sudo netstat -tlnp | grep 80
   
   # Test locally
   curl http://localhost:80
   curl http://localhost:3000
   ```

**4. Check Firewall**
   ```bash
   sudo ufw status
   # If needed, allow ports
   sudo ufw allow 80/tcp
   sudo ufw allow 3000/tcp
   ```

**5. Restart Services**
   ```bash
   # Restart Next.js app
   pm2 restart penaca-app
   pm2 logs penaca-app --lines 100
   
   # Restart Nginx if needed
   sudo systemctl restart nginx
   sudo nginx -t  # Test configuration
   ```

### Deployment Fails

1. **Check GitHub Actions logs** - Look for error messages
2. **Verify secrets** - Ensure all 3 secrets are set correctly
3. **Check SSH access** - Test manually:
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```
4. **Check permissions**:
   ```bash
   sudo chown -R ubuntu:ubuntu /home/ubuntu/app
   ```

### App Not Running

```bash
# Check PM2
pm2 status
pm2 logs penaca-app

# Restart manually
pm2 restart penaca-app
```

### Port Already in Use

```bash
# Find process using port 80
sudo lsof -i :80

# Find process using port 3000
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>
```

### Nginx Issues

```bash
# Check Nginx status
sudo systemctl status nginx

# Test Nginx configuration
sudo nginx -t

# View Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

---

## Useful Commands

### PM2 Commands

```bash
pm2 status              # View status
pm2 logs penaca-app     # View logs
pm2 restart penaca-app  # Restart app
pm2 stop penaca-app     # Stop app
pm2 monit               # Monitor resources
```

### System Commands

```bash
# Check if app is responding
curl http://localhost:80
curl http://localhost:3000

# Check disk space
df -h

# Check memory
free -h
```

### Nginx Commands

```bash
# Check Nginx status
sudo systemctl status nginx

# Test Nginx configuration
sudo nginx -t

# View Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Reload Nginx (after config changes)
sudo nginx -s reload
```

---

## Architecture

```
Internet → EC2 (Port 80) → Nginx → Next.js App (Port 3000) → PM2
```

**How it works:**
- Users access your site on port 80 (standard HTTP port)
- Nginx acts as a reverse proxy, forwarding requests to Next.js on port 3000
- PM2 manages the Next.js application process
- No need to specify port numbers in URLs - clean and professional!

---

**That's it! Your deployment pipeline is ready. Just push to `main` and it will deploy automatically! 🚀**
