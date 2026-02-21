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

**Note:** If you don't have Homebrew installed, get it from https://brew.sh first

**For Windows:**
```powershell
choco install git
```

**Note:** If you don't have Chocolatey installed, get it from https://chocolatey.org first

**Note:** Or download Git directly from https://git-scm.com/downloads

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

<sub style="color: #9CA3AF">Video instruction: [Show .gitignore file with .env entry]</sub>

**💡 ProTip:** Do not push this access key to your Git repository. Git doesn't ignore `.env` files by default - you must add `.env` to your `.gitignore` file. Our project already has this configured, but if you were working on another project, ensure to add it to your `.gitignore` file.

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
S3_UPLOAD_FOLDER=
S3_RESULTS_FOLDER=
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
S3_UPLOAD_FOLDER=
S3_RESULTS_FOLDER=
```

Notice the `S3_BUCKET_NAME`, `S3_UPLOAD_FOLDER`, and `S3_RESULTS_FOLDER` are empty for now. Don't worry - we'll create the S3 bucket in the next step and fill these in.

### Create S3 Bucket [IMPLEMENTATION]

<sub style="color: #9CA3AF">Video instruction: [Show complete system architecture diagram]</sub>

Let's quickly review how our backend interacts with S3. The backend uploads review files to one folder and later retrieves analysis results from another folder. We'll create both of these folders in our S3 bucket.

<sub style="color: #9CA3AF">Video instruction: [Switch to AWS Console]</sub>

Now let's create the S3 bucket where we'll store our review files and analysis results.

**Step 1:** In the AWS Console search bar, type **S3** and click on the S3 service.

<sub style="color: #9CA3AF">Video instruction: [Search for S3 and click on service]</sub>

**Step 2:** Click **Create bucket**.

<sub style="color: #9CA3AF">Video instruction: [Click Create bucket button]</sub>

**Step 3:** Enter a bucket name. S3 bucket names must be globally unique across all of AWS, so let's use: **review-analysis-bucket-darius**

<sub style="color: #9CA3AF">Video instruction: [Type bucket name: review-analysis-bucket-darius]</sub>

**Note:** Please use the same naming as shown in this tutorial to avoid confusion. We'll reference these names in multiple places throughout the project (backend code, Lambda function, event notifications). If you must use a different name, make sure to update it consistently everywhere.

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

**Note:** `AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_HERE` and `AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY_HERE` should have actual values you got from previous steps, not the dummy data.

**Step 13:** Save the file.

<sub style="color: #9CA3AF">Video instruction: [Save .env file]</sub>

Perfect! Our backend is now fully configured with AWS credentials and the S3 bucket name.

**Step 4:** Save the file.

<sub style="color: #9CA3AF">Video instruction: [Save .env file]</sub>

Now let's test if our backend can authenticate with AWS.

<sub style="color: #9CA3AF">Video instruction: [Switch to browser with frontend open]</sub>

Let's try uploading a review file again.

<sub style="color: #9CA3AF">Video instruction: [Upload review file, click Analyze]</sub>

Perfect! Our backend can now connect to AWS via the AWS SDK and upload the file to the S3 bucket.

Let's confirm the file was actually uploaded to the folder.

<sub style="color: #9CA3AF">Video instruction: [Switch to AWS Console, navigate to S3, open review-analysis-bucket-darius → 01-aws-comprehend-review-analysis → review-analysis-uploads folder, show uploaded file with timestamp name like 2026-02-03T17-45-51-009Z.json]</sub>

There it is - our review file successfully uploaded to the review-analysis-uploads folder in S3. Notice how the backend automatically renamed it with a timestamp: `2026-02-03T17-45-51-009Z.json`. This ensures every upload has a unique name.

<sub style="color: #9CA3AF">Video instruction: [Click on the .json file, then click the Open button to show the JSON contents with the review data]</sub>

Here's the content - our product reviews in JSON format, ready to be processed by Lambda and Comprehend.

Now let's set up the AWS infrastructure to analyze these reviews and store the results in the `analysis-results` folder - where our backend retrieves them and sends them to the frontend.

### AWS Infrastructure Demo [INFORMATION]

<sub style="color: #9CA3AF">Video instruction: [Show AWS Infrastructure flowchart from README]</sub>

Before we start building, let's walk through exactly what happens when a user uploads a review file. I'll show you each AWS service in action on the AWS dashboard.

<sub style="color: #9CA3AF">Video instruction: [Switch to browser with frontend at localhost:5173]</sub>

Let's say a user uploads this iPhone reviews JSON file.

<sub style="color: #9CA3AF">Video instruction: [Upload 1-iphone-17-reviews.json, click Analyze]</sub>

The backend receives it and uploads to S3 with a timestamp name like `2026-02-18T13-30-45-123Z.json`.

<sub style="color: #9CA3AF">Video instruction: [Switch to AWS Console, navigate to S3]</sub>

**Step 1: S3 Bucket** - Here's our S3 bucket. The file lands in the `review-analysis-uploads/` folder.

<sub style="color: #9CA3AF">Video instruction: [PAUSE - Show popup overlay explaining S3]</sub>

**What is Amazon S3?**

S3 stands for Simple Storage Service. It's AWS's object storage service - think of it as an infinitely scalable hard drive in the cloud. You can store any type of file: images, videos, documents, backups, anything.

**Key features:**
- **Durability**: 99.999999999% (11 nines) - your data is replicated across multiple data centers
- **Scalability**: Store from 1 byte to petabytes without worrying about capacity
- **Pay-as-you-go**: Only pay for what you store and transfer

**Example 1: Static Website Hosting**
Companies host entire websites on S3. Upload your HTML, CSS, JavaScript files, enable static website hosting, and you have a live website. No servers to manage. Netflix uses S3 to store and serve images for their UI.

**Example 2: Data Lake for Analytics**
Enterprises store massive datasets in S3 for analysis. A retail company might store years of transaction logs, then use AWS Athena to query them directly without moving the data. S3 becomes the central repository for all company data.

**Example 3: Backup and Disaster Recovery**
Companies backup their databases and critical files to S3. If their primary systems fail, they can restore from S3. Many use S3 Glacier for long-term archival at lower cost.

**Example 4: Application File Storage**
Mobile apps and web apps store user-generated content in S3. Instagram stores billions of photos in S3. When you upload a photo, it goes to S3, and when you view it, it's served from S3.

**In Our Project:**
S3 stores two things: the original review JSON files uploaded by users, and the analysis results generated by Lambda after calling Comprehend. The backend uploads files to the `review-analysis-uploads/` folder, and Lambda saves results to the `analysis-results/` folder. S3 also triggers the entire pipeline by sending event notifications when new files arrive.

<sub style="color: #9CA3AF">Video instruction: [Resume demo, show S3 bucket, navigate to review-analysis-uploads folder, show the uploaded file]</sub>

Now watch what happens. The moment this file appears, S3 has an event notification configured.

<sub style="color: #9CA3AF">Video instruction: [Click on bucket name, go to Properties tab, scroll to Event notifications section]</sub>

See this event notification? It's watching the uploads folder. When a `.json` file appears, it automatically sends a message to our SQS queue.

<sub style="color: #9CA3AF">Video instruction: [Navigate to SQS service in AWS Console]</sub>

**Step 2: SQS Queue** - Here's our queue: `review-analysis-queue`.

<sub style="color: #9CA3AF">Video instruction: [PAUSE - Show popup overlay explaining SQS]</sub>

**What is Amazon SQS?**

SQS stands for Simple Queue Service. It's a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Think of it as a reliable post office that holds messages until they're picked up.

**Key features:**
- **Reliable**: Messages are stored redundantly across multiple servers
- **Scalable**: Handles from 1 to millions of messages per second
- **Decoupling**: Sender and receiver don't need to interact at the same time

**Example 1: Order Processing**
An e-commerce site receives thousands of orders per second during Black Friday. Instead of processing them immediately (which could crash the system), orders are sent to an SQS queue. Worker servers pick up orders from the queue at their own pace, ensuring no orders are lost even during traffic spikes.

**Example 2: Image Processing Pipeline**
A photo-sharing app receives user uploads. The upload service puts a message in SQS saying "new image uploaded." Multiple worker services pick up messages and process them: one creates thumbnails, another scans for inappropriate content, another extracts metadata. All working independently, all pulling from the same queue.

**Example 3: Microservices Communication**
In a microservices architecture, Service A needs to notify Service B about an event, but Service B might be down for maintenance. Instead of failing, Service A sends a message to SQS. When Service B comes back online, it processes all queued messages. No data loss, no tight coupling.

**In Our Project:**
SQS sits between S3 and Lambda. When a review file is uploaded to S3, S3 sends a notification message to this queue. Lambda polls the queue and processes messages one by one. If Lambda fails or times out, SQS automatically makes the message visible again for retry. This ensures every uploaded file gets processed, even during high traffic or temporary failures.

<sub style="color: #9CA3AF">Video instruction: [Resume demo, click on the queue, show Messages available count]</sub>

See the message count? That's the notification from S3 saying "hey, a new file just arrived." SQS holds this message until Lambda is ready to process it.

<sub style="color: #9CA3AF">Video instruction: [Navigate to Lambda service in AWS Console]</sub>

**Step 3: Lambda Function** - Here's our Lambda function: `review-analysis-processor`.

<sub style="color: #9CA3AF">Video instruction: [PAUSE - Show popup overlay explaining Lambda]</sub>

**What is AWS Lambda?**

Lambda is AWS's serverless compute service. You upload your code, and AWS runs it for you - no servers to provision, no infrastructure to manage. You only pay for the compute time you actually use, measured in milliseconds.

**Key features:**
- **Serverless**: No servers to manage, patch, or scale
- **Auto-scaling**: Handles 1 request or 10,000 requests automatically
- **Pay-per-use**: Only charged when your code runs, down to 100ms increments

**Example 1: API Backend**
A mobile app needs a backend API. Instead of running servers 24/7, developers write Lambda functions for each API endpoint. When a user makes a request, Lambda executes the function and returns the response. If 1 million users hit the API simultaneously, Lambda automatically scales to handle it. If nobody uses the app at 3 AM, you pay nothing.

**Example 2: Scheduled Tasks**
A company needs to generate daily reports at midnight. A Lambda function runs on a schedule (using CloudWatch Events), queries the database, generates a PDF report, and emails it to managers. No server sitting idle for 23 hours a day - Lambda runs for 2 minutes, you pay for 2 minutes.

**Example 3: Real-time File Processing**
A video streaming platform receives video uploads. When a video lands in S3, Lambda automatically triggers, transcodes the video to multiple resolutions (1080p, 720p, 480p), generates thumbnails, and updates the database. All without managing any servers.

**Example 4: IoT Data Processing**
Smart home devices send temperature readings every minute. Lambda processes each reading, checks if it's outside normal range, and sends alerts if needed. Scales automatically as you add more devices - from 10 to 10 million.

**Example 5: Chatbot Backend**
A customer service chatbot powered by Lambda. Each user message triggers a Lambda function that processes the text, calls an AI service, and returns a response. Handles thousands of concurrent conversations without pre-provisioning servers.

**In Our Project:**
Lambda is the brain of our pipeline. It's triggered by SQS messages, downloads the review file from S3, calls AWS Comprehend seven times per review to analyze sentiment, entities, key phrases, and more, then saves the complete analysis back to S3. Lambda scales automatically - if 100 users upload files simultaneously, 100 Lambda instances spin up to process them in parallel. We only pay for the seconds Lambda actually runs.

<sub style="color: #9CA3AF">Video instruction: [Resume demo, click on the function, show Configuration tab]</sub>

Lambda is constantly polling that SQS queue. When it sees a message, it wakes up, grabs the message, and starts processing.

<sub style="color: #9CA3AF">Video instruction: [Click on Configuration → Triggers, show SQS trigger]</sub>

See this trigger? That's the connection between SQS and Lambda. Lambda automatically invokes when messages arrive.

<sub style="color: #9CA3AF">Video instruction: [Click on Configuration → Permissions, show IAM role]</sub>

**Step 4: IAM Role** - This role gives Lambda permission to read from S3, receive messages from SQS, call Comprehend, and write results back to S3.

<sub style="color: #9CA3AF">Video instruction: [PAUSE - Show popup overlay explaining IAM]</sub>

**What is AWS IAM?**

IAM stands for Identity and Access Management. It's AWS's security service that controls who can access what in your AWS account. Think of it as the security guard and badge system for your cloud infrastructure.

**Key concepts:**
- **Users**: Individual people with login credentials
- **Roles**: Permissions that services can assume (like Lambda, EC2)
- **Policies**: Documents that define what actions are allowed or denied

**Example 1: Employee Access Control**
A company has developers, data scientists, and managers. Developers get IAM permissions to deploy code to Lambda and EC2. Data scientists get access to S3 data buckets and SageMaker. Managers get read-only access to billing. Each person only sees and can modify what they need - principle of least privilege.

**Example 2: Cross-Account Access**
Company A wants to share specific S3 data with Company B (a partner). Instead of creating passwords, Company A creates an IAM role that Company B's AWS account can assume. Company B can access only that specific S3 bucket, nothing else. Access can be revoked instantly by deleting the role.

**Example 3: Service-to-Service Permissions**
An EC2 server needs to read from S3 and write to DynamoDB. Instead of hardcoding AWS credentials in the code (security risk), you attach an IAM role to the EC2 instance. The role grants S3 read and DynamoDB write permissions. AWS automatically handles credential rotation and security.

**In Our Project:**
Our Lambda function needs to interact with multiple AWS services: read files from S3, receive messages from SQS, call Comprehend APIs, and write results back to S3. The IAM role `review-analysis-lambda-role` grants Lambda exactly these permissions. Without this role, Lambda would get "Access Denied" errors when trying to access these services. The role ensures Lambda can do its job while following the principle of least privilege.

<sub style="color: #9CA3AF">Video instruction: [Resume demo, click on the role name to open IAM, show attached policies]</sub>

See these policies? S3 access, SQS access, Comprehend access. Without these, Lambda can't do anything.

<sub style="color: #9CA3AF">Video instruction: [Go back to Lambda function, click on Monitor tab, then View CloudWatch logs]</sub>

**Step 5: Lambda Execution** - Let's check the logs to see what Lambda actually did.

<sub style="color: #9CA3AF">Video instruction: [Click on latest log stream, show logs with Comprehend API calls]</sub>

Here's the execution. Lambda downloaded the file from S3, parsed the reviews, and called AWS Comprehend seven times per review: language detection, sentiment analysis, key phrases, entities, syntax, targeted sentiment, and PII detection.

<sub style="color: #9CA3AF">Video instruction: [Navigate to Comprehend service in AWS Console]</sub>

**Step 6: AWS Comprehend** - This is the AI service doing the heavy lifting. It's a fully managed NLP service - no training required, just API calls.

<sub style="color: #9CA3AF">Video instruction: [PAUSE - Show popup overlay explaining Comprehend]</sub>

**What is AWS Comprehend?**

Comprehend is AWS's natural language processing (NLP) service powered by machine learning. It analyzes text to extract insights like sentiment, entities, key phrases, and language. The models are pre-trained on massive datasets - you just send text and get structured insights back.

**Key features:**
- **Pre-trained models**: No ML expertise or training data required
- **Multiple languages**: Supports 100+ languages
- **Real-time and batch**: Process one document or millions

**Example 1: Customer Support Ticket Analysis**
A company receives 10,000 support tickets daily. Comprehend analyzes each ticket to detect sentiment (angry, neutral, satisfied), extract key phrases (billing issue, login problem), and identify entities (product names, account numbers). Urgent negative tickets are automatically prioritized for human agents.

**Example 2: Social Media Monitoring**
A brand monitors Twitter mentions. Comprehend analyzes tweets in real-time to detect sentiment about their products. If sentiment suddenly drops, marketing teams get alerted. They can also extract trending topics and entities to understand what customers are talking about.

**Example 3: Document Classification**
A law firm processes thousands of legal documents. Comprehend extracts entities (people, organizations, dates), identifies key phrases (contract terms, clauses), and detects PII (personally identifiable information) for redaction. This automates hours of manual review work.

**In Our Project:**
Comprehend is the AI engine that analyzes product reviews. For each review, Lambda calls Comprehend seven times: language detection (is it English or Chinese?), sentiment analysis (positive, negative, neutral?), key phrase extraction (what topics are mentioned?), entity recognition (what products, locations, brands?), syntax analysis (grammatical structure), targeted sentiment (sentiment about specific features), and PII detection (any personal information?). All this happens in seconds without us training any models.

<sub style="color: #9CA3AF">Video instruction: [Resume demo, show Comprehend dashboard, maybe click on Analysis jobs or Real-time analysis]</sub>

Comprehend processes the text and returns structured insights - sentiment scores, entities, key phrases, everything.

<sub style="color: #9CA3AF">Video instruction: [Navigate back to S3, go to analysis-results folder]</sub>

**Step 7: Results Storage** - Lambda takes all those Comprehend results and saves them back to S3 in the `analysis-results/` folder with a matching timestamp: `analysis-2026-02-18T13-30-45-123Z.json`.

<sub style="color: #9CA3AF">Video instruction: [Show the result file in analysis-results folder, click to preview JSON]</sub>

There's our analysis - complete with sentiment, entities, key phrases, everything.

<sub style="color: #9CA3AF">Video instruction: [Switch back to frontend, click See Results]</sub>

The frontend polls the backend, the backend retrieves this file from S3, and boom - results displayed with charts and visualizations.

<sub style="color: #9CA3AF">Video instruction: [Show results with charts]</sub>

That's the complete flow. Now let's build this infrastructure step by step.

### AWS Infrastructure Implementation [IMPLEMENTATION]

Now let's actually build this infrastructure. We already have the S3 bucket and folders set up. We need to create the SQS queue, Lambda function, IAM role, and configure everything to work together.

#### Create SQS Queue

<sub style="color: #9CA3AF">Video instruction: [Navigate to AWS Console]</sub>

SQS is our message queue that sits between S3 and Lambda. It ensures reliable message delivery and provides retry logic if Lambda fails.

**Step 1:** In the AWS Console search bar, type **SQS** and click on the service.

<sub style="color: #9CA3AF">Video instruction: [Search for SQS and click]</sub>

**Step 2:** Click **Create queue**.

<sub style="color: #9CA3AF">Video instruction: [Click Create queue button]</sub>

**Step 3:** For queue type, select **Standard**. Standard queues provide high throughput and at-least-once delivery, which is perfect for our use case.

<sub style="color: #9CA3AF">Video instruction: [Select Standard queue type]</sub>

**Step 4:** For the queue name, enter: **review-analysis-queue**

<sub style="color: #9CA3AF">Video instruction: [Type queue name]</sub>

**Note:** Please use the same naming as shown in this tutorial. This queue name will be referenced in the Lambda trigger configuration and S3 event notifications.

**Step 5:** Under Configuration, set **Visibility timeout** to **300 seconds** (5 minutes). This gives Lambda enough time to process the file and call Comprehend without the message becoming visible to other consumers.

<sub style="color: #9CA3AF">Video instruction: [Set Visibility timeout to 300]</sub>

**💡 ProTip:** Visibility timeout is how long a message stays hidden after a consumer picks it up. If Lambda takes 2 minutes to process but the timeout is 30 seconds, SQS will think Lambda failed and send the message again, causing duplicate processing. Always set this longer than your expected processing time.

**Step 6:** Leave all other settings as default and scroll down. Click **Create queue**.

<sub style="color: #9CA3AF">Video instruction: [Scroll and click Create queue]</sub>

Perfect! Queue created. Now we need to give S3 permission to send messages to this queue.

<sub style="color: #9CA3AF">Video instruction: [Show queue details page]</sub>

**Step 7:** Copy the **Queue ARN** - we'll need this for the S3 event notification. It looks like: `arn:aws:sqs:us-east-1:123456789012:review-analysis-queue`

<sub style="color: #9CA3AF">Video instruction: [Highlight and copy Queue ARN]</sub>

**Step 8:** Click on the **Access policy** tab.

<sub style="color: #9CA3AF">Video instruction: [Click Access policy tab]</sub>

**Step 9:** Click **Edit** to modify the policy.

<sub style="color: #9CA3AF">Video instruction: [Click Edit button]</sub>

**Step 10:** Replace the policy with this JSON. This allows S3 to send messages to our queue:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Action": "sqs:SendMessage",
      "Resource": "<YOUR_SQS_QUEUE_ARN>",
      "Condition": {
        "ArnEquals": {
          "aws:SourceArn": "arn:aws:s3:::<YOUR_S3_BUCKET_NAME>"
        }
      }
    }
  ]
}
```

<sub style="color: #9CA3AF">Video instruction: [Show policy editor, paste JSON]</sub>

**Note:** Replace `<YOUR_SQS_QUEUE_ARN>` with the Queue ARN you copied earlier (e.g., `arn:aws:sqs:us-east-1:123456789012:review-analysis-queue`). Replace `<YOUR_S3_BUCKET_NAME>` with your bucket name (e.g., `review-analysis-bucket-darius`).

**💡 ProTip:** This policy uses the principle of least privilege. It only allows the S3 service to send messages, and only from our specific bucket. No other service or bucket can send messages to this queue.

**Step 11:** Click **Save**.

<sub style="color: #9CA3AF">Video instruction: [Click Save]</sub>

SQS queue is ready. Now let's create the Lambda function.

#### Create IAM Role for Lambda

Before we create the Lambda function, we need to create an IAM role that gives Lambda the permissions it needs.

**Step 1:** Navigate to **IAM** service.

<sub style="color: #9CA3AF">Video instruction: [Search for IAM and click]</sub>

**Step 2:** Click **Roles** in the left sidebar.

<sub style="color: #9CA3AF">Video instruction: [Click Roles]</sub>

**Step 3:** Click **Create role**.

<sub style="color: #9CA3AF">Video instruction: [Click Create role]</sub>

**Step 4:** For trusted entity type, select **AWS service**.

<sub style="color: #9CA3AF">Video instruction: [Select AWS service]</sub>

**Step 5:** For use case, select **Lambda**, then click **Next**.

<sub style="color: #9CA3AF">Video instruction: [Select Lambda, click Next]</sub>

**Step 6:** Now we need to attach policies. Search for and select these four policies:

1. **AWSLambdaBasicExecutionRole** - Allows Lambda to write logs to CloudWatch
2. **AmazonS3FullAccess** - Allows Lambda to read from uploads folder and write to results folder
3. **AmazonSQSFullAccess** - Allows Lambda to receive and delete messages from the queue
4. **ComprehendFullAccess** - Allows Lambda to call all AWS Comprehend APIs

<sub style="color: #9CA3AF">Video instruction: [Search and check each policy one by one]</sub>

**💡 ProTip:** In production, you'd create custom policies with minimal permissions instead of using FullAccess policies. But for learning and development, FullAccess is fine.

**Step 7:** Click **Next**.

<sub style="color: #9CA3AF">Video instruction: [Click Next]</sub>

**Step 8:** For role name, enter: **review-analysis-lambda-role**

<sub style="color: #9CA3AF">Video instruction: [Type role name]</sub>

**Note:** Please use the same naming as shown in this tutorial. This role name will be assigned to the Lambda function.

**Step 9:** Scroll down and click **Create role**.

<sub style="color: #9CA3AF">Video instruction: [Scroll and click Create role]</sub>

Perfect! IAM role created. Now Lambda will have all the permissions it needs.

#### Create Lambda Function

Now let's create the Lambda function that processes the reviews.

**Step 1:** Navigate to **Lambda** service.

<sub style="color: #9CA3AF">Video instruction: [Search for Lambda and click]</sub>

**Step 2:** Click **Create function**.

<sub style="color: #9CA3AF">Video instruction: [Click Create function]</sub>

**Step 3:** Select **Author from scratch**.

<sub style="color: #9CA3AF">Video instruction: [Select Author from scratch]</sub>

**Step 4:** For function name, enter: **review-analysis-processor**

<sub style="color: #9CA3AF">Video instruction: [Type function name]</sub>

**Note:** Please use the same naming as shown in this tutorial. This function name will be referenced in CloudWatch logs and monitoring.

**Step 5:** For runtime, select **Python 3.10** (or the latest Python 3.x version available).

<sub style="color: #9CA3AF">Video instruction: [Select Python 3.10 from dropdown]</sub>

**💡 ProTip:** We're using Python because AWS SDK for Python (boto3) has excellent support for Comprehend and is pre-installed in Lambda. No need to package dependencies.

**Step 6:** Under Permissions, expand **Change default execution role**.

<sub style="color: #9CA3AF">Video instruction: [Expand Change default execution role]</sub>

**Step 7:** Select **Use an existing role** and choose **review-analysis-lambda-role** from the dropdown.

<sub style="color: #9CA3AF">Video instruction: [Select Use an existing role, choose review-analysis-lambda-role]</sub>

**Step 8:** Click **Create function**.

<sub style="color: #9CA3AF">Video instruction: [Click Create function]</sub>

Great! Function created. Now we need to add the code.

<sub style="color: #9CA3AF">Video instruction: [Show Lambda function page with Code tab]</sub>

**Step 9:** Scroll down to the **Code source** section. We need to add our Lambda function code.

<sub style="color: #9CA3AF">Video instruction: [Show Lambda code editor]</sub>

The complete Lambda function code is available in the project repository at `courses/01-aws-comprehend-review-analysis/lambda_function.py`. This code handles the entire processing pipeline: receiving SQS messages, downloading files from S3, calling all 7 Comprehend APIs, and saving results back to S3.

<sub style="color: #9CA3AF">Video instruction: [Open courses/01-aws-comprehend-review-analysis/lambda_function.py file from project, show the code briefly]</sub>

Copy the entire contents of `lambda_function.py` and paste it into the Lambda code editor, replacing the default code.

<sub style="color: #9CA3AF">Video instruction: [Show code being pasted into Lambda editor]</sub>

**Note:** We'll explain this code in detail in a later section. For now, just know it processes reviews through Comprehend and saves the results.

**Step 10:** Click **Deploy** to save the code.

<sub style="color: #9CA3AF">Video instruction: [Click Deploy button]</sub>

**Step 11:** Now we need to increase the timeout. Click on the **Configuration** tab.

<sub style="color: #9CA3AF">Video instruction: [Click Configuration tab]</sub>

**Step 12:** Click **General configuration**, then click **Edit**.

<sub style="color: #9CA3AF">Video instruction: [Click General configuration, then Edit]</sub>

**Step 13:** Change **Timeout** to **5 minutes** (300 seconds). Comprehend API calls can take time, especially with multiple reviews.

<sub style="color: #9CA3AF">Video instruction: [Change timeout to 5 min 0 sec]</sub>

**Step 14:** Click **Save**.

<sub style="color: #9CA3AF">Video instruction: [Click Save]</sub>

Perfect! Lambda function is ready. Now let's connect it to SQS.

#### Connect Lambda to SQS

**Step 1:** In the Lambda function page, click **Add trigger**.

<sub style="color: #9CA3AF">Video instruction: [Click Add trigger button]</sub>

**Step 2:** In the trigger configuration, select **SQS** from the dropdown.

<sub style="color: #9CA3AF">Video instruction: [Select SQS]</sub>

**Step 3:** For SQS queue, select **review-analysis-queue**.

<sub style="color: #9CA3AF">Video instruction: [Select review-analysis-queue from dropdown]</sub>

**Step 4:** Leave **Batch size** as **1** - this means Lambda processes one message at a time.

<sub style="color: #9CA3AF">Video instruction: [Show Batch size set to 1]</sub>

**💡 ProTip:** Batch size determines how many messages Lambda receives in a single invocation. For our use case, processing one file at a time is simpler and easier to debug.

**Step 5:** Click **Add**.

<sub style="color: #9CA3AF">Video instruction: [Click Add]</sub>

Excellent! Lambda is now connected to SQS. Whenever a message arrives in the queue, Lambda will automatically invoke.

#### Configure S3 Event Notification

Now for the final piece - configuring S3 to send notifications to SQS when files are uploaded.

**Step 1:** Navigate to **S3** service.

<sub style="color: #9CA3AF">Video instruction: [Navigate to S3]</sub>

**Step 2:** Click on **review-analysis-bucket-darius**.

<sub style="color: #9CA3AF">Video instruction: [Click on bucket]</sub>

**Step 3:** Click on the **Properties** tab.

<sub style="color: #9CA3AF">Video instruction: [Click Properties tab]</sub>

**Step 4:** Scroll down to **Event notifications** section and click **Create event notification**.

<sub style="color: #9CA3AF">Video instruction: [Scroll to Event notifications, click Create event notification]</sub>

**Step 5:** For event name, enter: **review-upload-notification**

<sub style="color: #9CA3AF">Video instruction: [Type event name]</sub>

**Note:** Please use the same naming as shown in this tutorial for consistency.

**Step 6:** For prefix, enter: **01-aws-comprehend-review-analysis/review-analysis-uploads/**

This ensures the notification only triggers for files in the uploads folder. Remember, we have two folders: `review-analysis-uploads/` for incoming files and `analysis-results/` for processed results - we only want to trigger on uploads.

<sub style="color: #9CA3AF">Video instruction: [Type prefix]</sub>

**Step 7:** For suffix, enter: **.json**

This ensures the notification only triggers for JSON files.

<sub style="color: #9CA3AF">Video instruction: [Type suffix]</sub>

**Step 8:** Under Event types, check **All object create events** (or specifically **PUT** and **POST**).

This triggers the notification whenever a new file is uploaded to S3, whether through the console, API, or our backend.

<sub style="color: #9CA3AF">Video instruction: [Check All object create events]</sub>

**Step 9:** Scroll down to **Destination** and select **SQS queue**.

<sub style="color: #9CA3AF">Video instruction: [Select SQS queue]</sub>

**Step 10:** Select **review-analysis-queue** from the dropdown.

<sub style="color: #9CA3AF">Video instruction: [Select review-analysis-queue]</sub>

**Step 11:** Click **Save changes**.

<sub style="color: #9CA3AF">Video instruction: [Click Save changes]</sub>

Perfect! S3 event notification is configured. Now whenever a JSON file is uploaded to the `review-analysis-uploads/` folder, S3 will automatically send a message to SQS, which will trigger Lambda, which will call Comprehend and save the results.

The entire AWS infrastructure is now complete and operational!

#### Test the Complete Pipeline

Let's test everything end-to-end.

<sub style="color: #9CA3AF">Video instruction: [Switch to browser with frontend at localhost:5173]</sub>

**Step 1:** Upload a review file.

<sub style="color: #9CA3AF">Video instruction: [Upload 1-iphone-17-reviews.json, click Analyze]</sub>

**Step 2:** The backend uploads to S3. Let's check the AWS Console.

<sub style="color: #9CA3AF">Video instruction: [Switch to AWS Console, navigate to S3, show file in review-analysis-uploads folder]</sub>

File is there. Now let's check SQS.

<sub style="color: #9CA3AF">Video instruction: [Navigate to SQS, show message count]</sub>

Message received! Now let's check Lambda.

<sub style="color: #9CA3AF">Video instruction: [Navigate to Lambda, click Monitor tab, click View CloudWatch logs]</sub>

Lambda is processing. Let's wait a moment...

<sub style="color: #9CA3AF">Video instruction: [Show logs with processing messages]</sub>

Processing complete! Now let's check if the results are in S3.

<sub style="color: #9CA3AF">Video instruction: [Navigate to S3, go to analysis-results folder, show result file]</sub>

There it is! Results saved. Now let's check the frontend.

<sub style="color: #9CA3AF">Video instruction: [Switch to frontend, click See Results]</sub>

And boom - results displayed with all the charts and visualizations!

<sub style="color: #9CA3AF">Video instruction: [Show results with charts: language distribution, sentiment analysis, geographic heatmap, etc.]</sub>

The complete pipeline is working. From upload to analysis to visualization - fully automated, fully serverless, fully scalable.

**💡 ProTip:** This architecture can handle one file or a thousand files. Lambda scales automatically, SQS buffers the load, and you only pay for what you use. That's the power of serverless.

Congratulations! You've just built an enterprise-grade, production-ready AI analysis pipeline on AWS.

## Claim Your Reward

<sub style="color: #9CA3AF">Video instruction: [Show celebration animation or confetti effect]</sub>

Remember that reward you wrote down at the beginning? The one you promised yourself when you completed this course?

**Go claim it. Right now.**

This is how you close the habit loop. You saw the cue, you did the routine, now you get the reward. This is what makes learning stick. This is what builds the discipline that will get you that 10K job.

Whether it's a nice dinner, a new gadget, a weekend trip, or just some well-deserved rest - honor your commitment to yourself. You earned it.

## What's Next: Episode 2

<sub style="color: #9CA3AF">Video instruction: [Show Episode 2 thumbnail or preview]</sub>

In this episode, we built a complete serverless pipeline and used AWS Comprehend to analyze reviews. But we only scratched the surface of what Comprehend can do.

**Episode 2: AWS Comprehend Deep-Dive** takes you through every major NLP feature that Comprehend offers - hands-on, using the AWS Console. You'll learn:

- **Language Detection** - Identify 100+ languages automatically
- **Advanced Sentiment Analysis** - Beyond positive/negative, understand mixed emotions
- **Entity Recognition** - Extract people, places, organizations, dates, and more
- **Key Phrase Extraction** - Identify the most important topics in text
- **Syntax Analysis** - Part-of-speech tagging and grammatical structure
- **Targeted Sentiment** - Understand sentiment toward specific features or entities
- **PII Detection and Redaction** - Protect sensitive data and comply with regulations
- **Topic Modeling** - Discover hidden themes in large document collections
- **Custom Classification** - Train models for your specific use cases
- **Custom Entity Recognition** - Detect domain-specific entities

This is the deep technical knowledge that separates junior developers from senior engineers. The kind of expertise that companies pay premium salaries for.

If you want to truly master AWS Comprehend and add enterprise-grade NLP skills to your toolkit, check out Episode 2. I'll see you there.

