# Episode 1: AWS Comprehend Review Analysis - Video Transcript

## The Pitch

Look at the stock market. AI companies - NVIDIA, Microsoft, Google, Amazon - they're not just growing. They're dominating. AI stocks represent the largest portion of the economy by far. We're talking trillions of dollars flowing into this industry.

What does that mean for you? Simple. Money follows opportunity. And right now, there's an abundance of money pouring into AI. Companies are desperate for talent. They're hiring. They're paying well. Ten thousand dollars per month? That's not a dream - that's the baseline for skilled AI engineers.

Here's the reality: while everyone's chasing saturated markets, fighting for scraps, the AI industry is wide open. Companies can't hire fast enough. The demand is insane.

And you? You're sitting on the opportunity of a lifetime.

I'm not here to sell you a course. I'm here to mentor you. To show you exactly what enterprise companies are looking for. To guide you through building real systems that solve real problems - the kind of work that gets you hired.

This course is completely free. I've spent months preparing this during my weekends because I believe everyone deserves the same opportunities - whether you're rich or poor. Quality education shouldn't be locked behind a paywall.

This isn't theory. This isn't fluff. This is hands-on, practical, enterprise-grade development. The skills you'll learn here are what companies pay ten K per month for.

Let me mentor you through your journey to success. Let's get you into the AI industry. Let's get you that job.

### What Makes This Course Different?

Your mentor - me, Darius - has over a decade of hands-on experience building tech projects, with around 30 projects completed. This isn't someone who just teaches - this is someone who builds, day in and day out, in real enterprise environments.

Right now, I'm building a mobility solution for a Canadian enterprise company - worked as a mobile app frontend developer, .NET backend developer, and tester. I've worked as a project/product manager for a military solution in South Korea, built a disaster recovery solution for 7 different dams in South Korea, built an AI poker player using reinforcement learning, developed and fine-tuned large language models, architected AI infrastructure on AWS, and created a mobile app that reached over 1 million downloads - to name just a few. These are real, production-grade systems - not toy projects.

Most YouTubers and instructors teach theory. I teach you how work actually gets done at companies.

The course design is unique. It simulates how employees work in an enterprise or any tech company for that matter. This is project-based learning - the exact way projects are built in the real world. No fluff, no filler. Just real skills that translate directly to your future job or internship.

## Demo

Before we dive in, if you're finding value here, please subscribe, like, and leave a comment. I will never ask for a penny from you - this course is completely free. Your support through likes, comments, and subscriptions truly motivates me to create more courses for you in the future.

<sub style="color: #9CA3AF">Video instruction: [Show Amazon product page with hundreds of reviews]</sub>

Imagine analyzing thousands of product reviews like these... in seconds. That's exactly what we built. You upload your reviews, AWS Comprehend instantly detects sentiment, extracts key insights, identifies entities - all powered by AI.

I'd charge between ten to twenty thousand dollars to fully implement what I'm about to show you. And you can do it too.

Let me show you.

<sub style="color: #9CA3AF">Video instruction: [Open browser to localhost:5173]</sub>

Here's the upload interface.

<sub style="color: #9CA3AF">Video instruction: [Show the upload interface with drag-and-drop area]</sub>

Let's upload some iPhone reviews from Canada and China.

<sub style="color: #9CA3AF">Video instruction: [Drag and drop 1-iphone-17-reviews.json]</sub>

Click Analyze to start processing.

<sub style="color: #9CA3AF">Video instruction: [Click Analyze button, show loading state]</sub>

So the file goes to our backend, gets stored in S3 - that's Amazon's cloud storage - triggers Lambda - a serverless function that runs our code - and Comprehend - AWS's AI service - analyzes each review.

<sub style="color: #9CA3AF">Video instruction: [Wait for processing, click See Results button]</sub>

Alright, results are ready.

<sub style="color: #9CA3AF">Video instruction: [Scroll through visualizations]</sub>

Language distribution - mostly English with some Chinese reviews. Comprehend automatically detects the language of each review.

Sentiment analysis - color-coded: green for positive, red for negative. This tells us how customers feel about the product.

Geographic heatmap showing sentiment by country. We can see which regions love the product... and which don't.

Key phrases - the most important topics customers mention, like battery life or camera quality.

Entity recognition - Comprehend identifies people, places, brands, products mentioned in reviews.

And there's more - syntax analysis, targeted sentiment for specific features, even PII detection to protect customer privacy.

<sub style="color: #9CA3AF">Video instruction: [Scroll to raw JSON at bottom]</sub>

Full analysis results available as JSON.

<sub style="color: #9CA3AF">Video instruction: [Show subscribe button animation/highlight]</sub>

This took me weeks to prepare - building the system, testing everything, creating this course. If you're finding value here, hit that subscribe button and like the video. It encourages me to make more courses for you.

## Habit Loop

<sub style="color: #9CA3AF">Video instruction: [Show habit loop diagram: Cue → Routine → Reward cycle]</sub>

I want you to decide on a reward for after you finish this course - something to look forward to. Maybe it's a nice dinner, a new gadget, a weekend trip, or something else meaningful to you.

Here's how to make this course a habit:

**Put a note on your monitor or phone** saying "Learn AI Course by Darius" - this is your trigger to start learning.

**Reward yourself** when you complete the course. The habit loop works in three parts: a cue triggers the behavior, you do the routine, and you get a reward. Write down your reward right now - somewhere you'll see it. Make it something you genuinely want.

## About Author

<sub style="color: #9CA3AF">Video instruction: [B-roll montage: Darius coding at desk, doing calisthenics/handstands, yoga poses, travel clips]</sub>

I'm Darius. I've spent the last decade building enterprise systems - from software development to cloud architecture, specializing in AWS and AI integration. Currently, I'm working as an engineer at a large enterprise company here in Canada.

Outside of tech, I'm into calisthenics, yoga, and pilates. I travel whenever I can - it keeps me grounded and gives me perspective.

Here's why I'm making this content: I want to help you land a ten thousand dollar per month job in tech. That's it. No courses to sell, no paid memberships. Just real, practical skills that companies actually pay for.

**💡 ProTip:** If you're a student or looking for a job, don't go for high-risk saturated areas like influencer careers or startup dreams right away. Follow my courses, land that ten K job first, build your financial foundation. Then do whatever you want with your life. But secure the bag first.

This series will show you exactly what enterprise companies look for. Let's get you that job.

## For Whom

This course is for students and professionals targeting roles like AI/ML Engineer, Machine Learning Engineer, Data Scientist, Cloud Engineer, AWS Solutions Architect, Full-Stack Developer, or DevOps Engineer - positions that pay ten K plus per month at enterprise companies.

## Project Overview [INFORMATION]

Before we dive in, let me explain how this course is structured. Sessions tagged as INFORMATION - like this one - are where I explain concepts, architecture, and theory. Sessions tagged as IMPLEMENTATION are where I show you exactly how to build it, step by step, hands-on.

Let me break down what we're building. Don't worry if some of this sounds complex right now - we'll dive deep into each piece later. Just get the big picture first.

<sub style="color: #9CA3AF">Video instruction: [Show architecture diagram - Complete System Architecture from README]</sub>

This is a full-stack, event-driven serverless application. Here's how it works:

User uploads a JSON file with product reviews through our React frontend.

<sub style="color: #9CA3AF">Video instruction: [Overlay: S3 logo/icon]</sub>

The Express backend validates the file and stores it in S3. Now, S3 is Amazon's Simple Storage Service - think of it as a massive hard drive in the cloud. It's incredibly reliable, scales automatically, and you only pay for what you use. In our project, S3 stores both the original review files and the analysis results. It's perfect for this because it can handle files of any size and integrates seamlessly with other AWS services.

<sub style="color: #9CA3AF">Video instruction: [Overlay: SQS logo/icon]</sub>

S3 automatically triggers an event that sends a message to SQS. SQS stands for Simple Queue Service - it's a message queue that acts like a buffer between services. Why do we need this? Well, imagine if a thousand users upload files at the same time. Without SQS, our Lambda function would get overwhelmed. SQS queues up these requests and processes them one by one, ensuring nothing gets lost. It's like a line at a coffee shop - everyone gets served, just in order.

<sub style="color: #9CA3AF">Video instruction: [Overlay: Lambda logo/icon]</sub>

SQS invokes our Lambda function. Lambda is AWS's serverless compute service - you write code, upload it, and AWS runs it for you. No servers to manage, no infrastructure to maintain. You only pay when your code actually runs. In our case, Lambda wakes up when there's a message in the queue, processes the review file, and goes back to sleep. If we get ten requests, ten Lambda instances spin up automatically. If we get zero requests, we pay zero dollars. That's the beauty of serverless.

<sub style="color: #9CA3AF">Video instruction: [Overlay: Comprehend logo/icon]</sub>

Lambda reads the file from S3 and calls AWS Comprehend. Comprehend is AWS's natural language processing service - it's powered by machine learning models trained on massive amounts of text data. It can understand context, detect emotions, identify entities, and extract meaning from text. For our project, Comprehend is doing the heavy lifting - analyzing sentiment, finding key phrases, detecting languages. Building this ourselves would take months and require machine learning expertise. With Comprehend, it's just an API call.

Comprehend runs seven different analyses on each review: language detection, sentiment analysis, key phrase extraction, entity recognition, syntax analysis, targeted sentiment, and PII detection.

Lambda saves the results back to S3. Now we have both the original reviews and the AI-generated insights stored in the cloud, ready to be retrieved.

Meanwhile, the frontend polls the backend asking... are the results ready yet? This is called polling - checking repeatedly until the data is available.

Once ready, the backend retrieves the analysis from S3 and sends it to the frontend.

The frontend displays everything with interactive charts and visualizations.

**🎯 Key Concept:** This architecture is what enterprise companies use in production. Event-driven, serverless, scalable, and cost-effective.

## Building the System [IMPLEMENTATION]

Now let's build this thing. I'll walk you through every step - from cloning the repository to running the complete application on your machine.

### Clone the Repository

<sub style="color: #9CA3AF">Video instruction: [Show GitHub repository page]</sub>

Here's our GitHub repository: https://github.com/darius-arian/learn_ai_enterprise_careers

Let's clone it to your local machine. Open your terminal and run:

```bash
git clone https://github.com/darius-arian/learn_ai_enterprise_careers.git
cd learn_ai_enterprise_careers/courses/01-aws-comprehend-review-analysis
```

**Note:** If you get a "command not found: git" error, you need to install Git first:

**For macOS:**
```bash
brew install git
```
*If you don't have Homebrew installed, get it from https://brew.sh first*

**For Windows:**
```powershell
choco install git
```
*If you don't have Chocolatey installed, get it from https://chocolatey.org first*

Or download Git directly from https://git-scm.com/downloads

<sub style="color: #9CA3AF">Video instruction: [Show terminal executing the commands]</sub>

**Note:** If you prefer a GUI, you can use GitHub Desktop as an alternative. Download from https://desktop.github.com

### Frontend Setup

<sub style="color: #9CA3AF">Video instruction: [Show frontend directory structure]</sub>

Let's start with the frontend. First, we need to install the required dependencies. Our frontend uses:
- **Node.js** - JavaScript runtime
- **React** - UI library
- **Vite** - Build tool and dev server
- **Recharts** - Data visualization library
- **react-simple-maps** - Geographic map components

**For macOS:**

```bash
# Install Node.js using Homebrew (macOS package manager)
# Note: If you don't have Homebrew installed, install it first from https://brew.sh
brew install node

# Verify installation
node --version
npm --version
```

**For Windows:**

```powershell
# Install Node.js using Chocolatey (Windows package manager)
choco install nodejs

# Verify installation
node --version
npm --version
```

<sub style="color: #9CA3AF">Video instruction: [Show terminal executing installation commands]</sub>

Now let's install the project dependencies and run the frontend. Here are the commands with brief explanations:

```bash
cd frontend
```
**Changes directory** to the frontend folder where the React app lives.

```bash
npm install
```
**Installs all dependencies** listed in package.json (React, Vite, Recharts, react-simple-maps, etc.). Downloads packages from npm registry into node_modules folder.

```bash
npm run dev
```
**Starts the Vite development server** on http://localhost:5173. Vite provides hot module replacement (HMR) - when you're developing the frontend and make a change in your code, your changes appear instantly in the browser without full page reloads.

<sub style="color: #9CA3AF">Video instruction: [Show terminal output with Vite dev server starting on port 5173]</sub>

The frontend is now running on http://localhost:5173

<sub style="color: #9CA3AF">Video instruction: [Open browser to localhost:5173]</sub>

Here's our interface. You can see the title "Episode 1: AWS Comprehend Review Analysis", the file upload area, and the Analyze button.

<sub style="color: #9CA3AF">Video instruction: [Navigate to data folder and show sample review file]</sub>

Let's try uploading a review file.

<sub style="color: #9CA3AF">Video instruction: [Drag and drop review file, click Analyze]</sub>

And... we get an error. That's expected - our backend isn't running yet. Don't worry, we'll fix this in the next step.

<sub style="color: #9CA3AF">Video instruction: [Show browser console with network error]</sub>

### Backend Setup

<sub style="color: #9CA3AF">Video instruction: [Change camera to Darius]</sub>

**💡 ProTip:** Don't worry if some of this feels overwhelming - just follow along step by step. You don't need to understand everything right now. We'll build understanding as we go.

<sub style="color: #9CA3AF">Video instruction: [Open new terminal window, navigate to backend directory]</sub>

Now let's set up the backend. Our backend uses:
- **Node.js** - JavaScript runtime (already installed)
- **Express** - Web server framework
- **AWS SDK** - To communicate with AWS services
- **Multer** - File upload handling
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

The dependencies are already listed in package.json, so we just need to install them:

```bash
cd backend
npm install
```

<sub style="color: #9CA3AF">Video instruction: [Show terminal installing dependencies]</sub>

Now let's run the backend:

```bash
npm start
```

<sub style="color: #9CA3AF">Video instruction: [Show terminal output: "Server running on port 3001"]</sub>

Wait - we're getting an error. The backend is trying to read the PORT from environment variables, but we haven't configured that yet.

Let's create a `.env` file for our backend configuration. The `.env` file stores sensitive information like API keys and credentials - keeping them separate from your code and out of version control. That's why the `.env` file is not available in our Git repository.

**Note:** We've included a `.env.example` file in the codebase as a template showing what variables you need to configure.

**Step 1:** In the backend directory, create a new file called `.env`:

```bash
# Navigate to backend directory from project root
cd courses/01-aws-comprehend-review-analysis/backend

# Create .env file
touch .env
```

**Step 2:** Open the `.env` file and add:

```bash
# courses/01-aws-comprehend-review-analysis/backend/.env
PORT=3001
```

**PORT=3001** - The port number where our backend server listens for API calls from the frontend.

**Step 3:** Save the file and run the backend again:

```bash
npm start
```

<sub style="color: #9CA3AF">Video instruction: [Show terminal output: "Server running on port 3001"]</sub>

Perfect. Backend is running on port 3001. You can test it by opening http://localhost:3001 in your browser - you should see "Backend is running... :)"

<sub style="color: #9CA3AF">Video instruction: [Switch back to browser with frontend at http://localhost:5173, refresh the page]</sub>

Let's try uploading again.

<sub style="color: #9CA3AF">Video instruction: [Open browser DevTools - press F12 or right-click → Inspect]</sub>

Let me show you something important - the browser console. This is where you can see what's happening behind the scenes. Press F12 or right-click and select Inspect, then go to the Console tab.

<sub style="color: #9CA3AF">Video instruction: [Upload review file, click Analyze]</sub>

<sub style="color: #9CA3AF">Video instruction: [Show Console tab with network requests]</sub>

Here you can see the API request our frontend sent to the backend. Click on the Network tab to see more details.

<sub style="color: #9CA3AF">Video instruction: [Show Network tab with POST /analyze request]</sub>

See this POST request to http://localhost:3001/analyze? That's our frontend sending the file to the backend. Click on it to see the request and response details.

<sub style="color: #9CA3AF">Video instruction: [Show complete system architecture workflow diagram]</sub>

The backend received our file and tried to upload it to S3... but we're getting an error. That's because we haven't configured AWS yet. The backend can't communicate with AWS services without proper credentials and infrastructure.

So now both frontend and backend are running and talking to each other, but we still need to set up the AWS infrastructure. Let's do that next.

### AWS Infrastructure Setup

**AWS Account**

If you don't have an AWS account yet, go to https://aws.amazon.com and create one.

**💡 ProTip:** AWS services are paid, but the ones we use in this course shouldn't cost you much - maybe a dollar or so. If you're aiming for 10K per month, you shouldn't concern yourself with a few bucks. Your time is worth gold. However, at the end of the course, I'll show you how to remove those services to stop getting recurring fees.

<sub style="color: #9CA3AF">Video instruction: [Show AWS homepage]</sub>

**Region Selection**

<sub style="color: #9CA3AF">Video instruction: [Show AWS Console with region selector in top-right]</sub>

I encourage you to use **us-east-1** (US East - N. Virginia) as your region. This region is usually the cheapest and has the most comprehensive coverage of AWS services. You can select it from the dropdown in the top-right corner of the AWS Console.

### IAM User Setup [INFORMATION]

<sub style="color: #9CA3AF">Video instruction: [Show AWS IAM dashboard]</sub>

IAM stands for Identity and Access Management. It's AWS's system for controlling who can access what in your AWS account. Think of it like security badges in a building - different people get different levels of access.

For our backend to communicate with AWS, it needs credentials - specifically, an access key and a secret key. These act like a username and password, but for programmatic access.

**💡 ProTip:** Here's an important security principle used in every enterprise company: least privilege access. Each employee or service should only have the minimum permissions needed to do their job. Nothing more. Why? If an account gets compromised, the hacker has limited access to your system. They can't do much damage.

<sub style="color: #9CA3AF">Video instruction: [Show complete system architecture diagram]</sub>

In our case, the backend only needs to read and write to S3 buckets. So we'll give it S3 permissions only - not access to databases, not access to billing, nothing else.

### IAM User Setup [IMPLEMENTATION]

<sub style="color: #9CA3AF">Video instruction: [Navigate through AWS Console]</sub>

Let's create an IAM user for our backend. From the AWS dashboard, search for **IAM** in the search bar.

<sub style="color: #9CA3AF">Video instruction: [Click on IAM service]</sub>

Click on **Users** in the left sidebar.

<sub style="color: #9CA3AF">Video instruction: [Click Users]</sub>

Click **Create user**.

<sub style="color: #9CA3AF">Video instruction: [Click Create user button]</sub>

For the user name, let's use something descriptive: **review-analysis-backend-user**

<sub style="color: #9CA3AF">Video instruction: [Type user name]</sub>

Click **Next**.

<sub style="color: #9CA3AF">Video instruction: [Click Next]</sub>

Now we need to set permissions. Click on **Attach policies directly**. This lets us choose pre-built permission sets that AWS provides.

<sub style="color: #9CA3AF">Video instruction: [Select "Attach policies directly" option]</sub>

In the search box, type **AmazonS3FullAccess** and check the box next to it.

<sub style="color: #9CA3AF">Video instruction: [Search and select AmazonS3FullAccess policy]</sub>

This gives our backend full access to S3 - read, write, delete. That's all it needs.

Click **Next**.

<sub style="color: #9CA3AF">Video instruction: [Click Next]</sub>

Review the details and click **Create user**.

<sub style="color: #9CA3AF">Video instruction: [Click Create user]</sub>

Perfect. User created. Now we need to generate access keys.

<sub style="color: #9CA3AF">Video instruction: [Navigate back to Users list]</sub>

Go back to **Users** and click on **review-analysis-backend-user**.

<sub style="color: #9CA3AF">Video instruction: [Click on the user]</sub>

Click on the **Security credentials** tab.

<sub style="color: #9CA3AF">Video instruction: [Click Security credentials tab]</sub>

Scroll down until you see **Access keys** section. 

**💡 ProTip:** Access keys are credentials that allow our backend to authenticate with AWS programmatically. Each access key belongs to a specific IAM user and inherits that user's permissions - that's why we created the IAM user first.

Click **Create access key**.

<sub style="color: #9CA3AF">Video instruction: [Click Create access key]</sub>

Select **Application running outside AWS** - since our backend is running on our local machine, it's considered an outside application. Click **Next**.

<sub style="color: #9CA3AF">Video instruction: [Select option and proceed]</sub>

Add a description tag if you want, then click **Create access key**.

<sub style="color: #9CA3AF">Video instruction: [Click Create access key]</sub>

Here are your credentials. You'll see the **Access key** and **Secret access key**.

<sub style="color: #9CA3AF">Video instruction: [Show access key and secret key on screen - blurred for security]</sub>

**Important:** If you don't copy your secret key now, you cannot see it ever again. AWS doesn't store it. So keep this tab open until we configure our backend.

### Configure Backend Environment Variables [IMPLEMENTATION]

<sub style="color: #9CA3AF">Video instruction: [Open backend .env file in code editor]</sub>

Now we need to add our AWS credentials to the backend configuration. Remember that `.env` file we created earlier with just the PORT? Let's add the AWS credentials to it.

**💡 ProTip:** Never commit secrets, passwords, or sensitive data to Git repositories. The `.env` file contains credentials that could compromise your AWS account if exposed. That's why it's listed in `.gitignore` and excluded from version control.

<sub style="color: #9CA3AF">Video instruction: [Show .env file with only PORT=3001]</sub>

Let's add the AWS configuration:

**Step 1:** Open the `.env` file in the backend directory (`courses/01-aws-comprehend-review-analysis/backend/.env`)

**Step 2:** Add the AWS configuration fields:

```bash
# courses/01-aws-comprehend-review-analysis/backend/.env
PORT=3001
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1
S3_BUCKET_NAME=
```

<sub style="color: #9CA3AF">Video instruction: [Switch back to AWS Console IAM tab with access keys]</sub>

**Step 3:** Now let's get those credentials. Go back to your AWS Console where we created the access keys.

<sub style="color: #9CA3AF">Video instruction: [Show IAM > Users > review-analysis-backend-user > Security credentials > Access keys section]</sub>

Copy the **Access key** value.

<sub style="color: #9CA3AF">Video instruction: [Highlight and copy access key]</sub>

Paste it into your `.env` file after `AWS_ACCESS_KEY_ID=`

<sub style="color: #9CA3AF">Video instruction: [Paste into .env file]</sub>

Now copy the **Secret access key**.

<sub style="color: #9CA3AF">Video instruction: [Highlight and copy secret key]</sub>

Paste it into your `.env` file after `AWS_SECRET_ACCESS_KEY=`

<sub style="color: #9CA3AF">Video instruction: [Paste into .env file]</sub>

Your `.env` file should now look like this:

```bash
PORT=3001
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_HERE
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY_HERE
AWS_REGION=us-east-1
S3_BUCKET_NAME=
```

Notice the `S3_BUCKET_NAME` is empty for now. Don't worry - we'll create the S3 bucket in the next step and fill this in.

### Create S3 Bucket [IMPLEMENTATION]

<sub style="color: #9CA3AF">Video instruction: [Switch to AWS Console]</sub>

Now let's create the S3 bucket where we'll store our review files and analysis results.

**Step 1:** In the AWS Console search bar, type **S3** and click on the S3 service.

<sub style="color: #9CA3AF">Video instruction: [Search for S3 and click on service]</sub>

**Step 2:** Click **Create bucket**.

<sub style="color: #9CA3AF">Video instruction: [Click Create bucket button]</sub>

**Step 3:** Enter a bucket name. S3 bucket names must be globally unique across all of AWS, so let's use: **review-analysis-bucket-darius**

<sub style="color: #9CA3AF">Video instruction: [Type bucket name: review-analysis-bucket-darius]</sub>

**Step 4:** Make sure the region is set to **us-east-1** (US East - N. Virginia).

<sub style="color: #9CA3AF">Video instruction: [Verify region is us-east-1]</sub>

**Step 5:** Leave all other settings as default and scroll down. Click **Create bucket**.

<sub style="color: #9CA3AF">Video instruction: [Scroll down and click Create bucket]</sub>

Perfect! Bucket created.

<sub style="color: #9CA3AF">Video instruction: [Show success message and bucket list]</sub>

**Step 6:** Now click on the bucket name to open it.

<sub style="color: #9CA3AF">Video instruction: [Click on review-analysis-bucket-darius]</sub>

**Step 7:** We need to create a folder structure inside this bucket. Click **Create folder**.

<sub style="color: #9CA3AF">Video instruction: [Click Create folder button]</sub>

**Step 8:** For the folder name, enter: **01-aws-comprehend-review-analysis**

<sub style="color: #9CA3AF">Video instruction: [Type folder name: 01-aws-comprehend-review-analysis]</sub>

Click **Create folder**.

<sub style="color: #9CA3AF">Video instruction: [Click Create folder]</sub>

**Step 9:** Now click into that folder we just created.

<sub style="color: #9CA3AF">Video instruction: [Click on 01-aws-comprehend-review-analysis folder]</sub>

**Step 10:** Inside this folder, we need to create two more folders. Click **Create folder** again.

<sub style="color: #9CA3AF">Video instruction: [Click Create folder]</sub>

First folder name: **review-analysis-uploads**

<sub style="color: #9CA3AF">Video instruction: [Type folder name and create]</sub>

This is where uploaded review files will be stored.

**Step 11:** Create another folder. Click **Create folder**.

<sub style="color: #9CA3AF">Video instruction: [Click Create folder]</sub>

Second folder name: **analysis-results**

<sub style="color: #9CA3AF">Video instruction: [Type folder name and create]</sub>

This is where Comprehend analysis results will be stored.

<sub style="color: #9CA3AF">Video instruction: [Show final folder structure: 01-aws-comprehend-review-analysis/review-analysis-uploads/ and 01-aws-comprehend-review-analysis/analysis-results/]</sub>

Perfect! Our S3 bucket structure is ready.

**Step 12:** Now let's update our `.env` file with the bucket name. Open the `.env` file in the backend directory.

<sub style="color: #9CA3AF">Video instruction: [Open backend/.env file in code editor]</sub>

Copy the bucket name **review-analysis-bucket-darius** and paste it after `S3_BUCKET_NAME=`

<sub style="color: #9CA3AF">Video instruction: [Paste bucket name into .env file]</sub>

Your `.env` file should now look like this:

```bash
PORT=3001
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_HERE
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY_HERE
AWS_REGION=us-east-1
S3_BUCKET_NAME=review-analysis-bucket-darius
S3_UPLOAD_FOLDER=01-aws-comprehend-review-analysis/review-analysis-uploads
S3_RESULTS_FOLDER=01-aws-comprehend-review-analysis/analysis-results
```

**Step 13:** Save the file.

<sub style="color: #9CA3AF">Video instruction: [Save .env file]</sub>

Perfect! Our backend is now fully configured with AWS credentials and the S3 bucket name.

**Step 4:** Save the file.

<sub style="color: #9CA3AF">Video instruction: [Save .env file]</sub>

Now let's test if our backend can authenticate with AWS.

<sub style="color: #9CA3AF">Video instruction: [Switch to browser with frontend open]</sub>

Let's try uploading a review file again.

<sub style="color: #9CA3AF">Video instruction: [Upload review file, click Analyze]</sub>

<sub style="color: #9CA3AF">Video instruction: [Show browser console with error about S3 bucket]</sub>

We're getting a different error now - something about the S3 bucket not existing. That's actually good news! It means our backend successfully authenticated with AWS using the credentials we just configured. The error is because we haven't created the S3 bucket yet.

Perfect. Our backend can now authenticate with AWS. However, we still need to create S3 buckets to store our data.

<sub style="color: #9CA3AF">Video instruction: [Save .env file]</sub>

Perfect. Our backend can now authenticate with AWS.

---

**Author**: Darius Arian  
**YouTube Channel**: https://www.youtube.com/@learn_ai_enterprise_careers  
**GitHub Repository**: https://github.com/darius-arian/learn_ai_enterprise_careers
