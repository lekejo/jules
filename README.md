# Fuel Refill Management App

## Table of Contents

-   [Application Description](#application-description)
-   [Features](#features)
-   [Technology Stack](#technology-stack)
-   [Before You Start: Essential Tools & Concepts](#before-you-start-essential-tools--concepts)
    -   [Understanding a Few Basics (For Complete Beginners)](#understanding-a-few-basics-for-complete-beginners)
    -   [About Key Tools You'll Use](#about-key-tools-youll-use)
-   [Getting the Application Code](#getting-the-application-code)
    -   [Option 1: Download as ZIP (For Beginners)](#option-1-download-as-zip-for-beginners)
    -   [Option 2: Using Git (Recommended for easier updates)](#option-2-using-git-recommended-for-easier-updates)
        -   [Checking for Git & Installing Git](#checking-for-git--installing-git)
        -   [Cloning the Repository](#cloning-the-repository)
        -   [Updating the Code](#updating-the-code)
-   [Installation and Running the App (OS-Specific Guides)](#installation-and-running-the-app-os-specific-guides)
    -   [For Windows 11 Users](#for-windows-11-users)
    -   [For macOS Users](#for-macos-users)
    -   [For Linux Users](#for-linux-users)
-   [Usage Guide](#usage-guide)
    -   [1. Navigating the App](#1-navigating-the-app)
    -   [2. Settings](#2-settings)
    -   [3. Managing Refills](#3-managing-refills)
    -   [4. Viewing the Dashboard](#4-viewing-the-dashboard)
-   [Future Enhancements](#future-enhancements)

## Application Description

The Fuel Refill Management App is a web-based tool designed to help users meticulously track their vehicle's fuel expenses and consumption patterns. Its primary purpose is to provide a clear overview of how much is being spent on fuel and to offer insights into the vehicle's efficiency over time. This application is ideal for any individual who wishes to monitor their fuel usage, manage related costs, and understand their vehicle's performance metrics like mileage and cost per kilometer. By logging each refill, users can gain valuable data to make informed decisions about their driving habits and vehicle maintenance.

## Features

-   **Settings Management**: Users can configure a default current fuel price. This price is then automatically used when logging new refills, simplifying data entry. It can be updated at any time to reflect current market rates.
-   **Refill Logging**: Comprehensive CRUD (Create, Read, Update, Delete) functionality for fuel refill records. Users can log new refills with details such as odometer reading, total refill cost, date of refill, and the specific fuel price at the time of refill (which defaults to the system setting but can be overridden). Existing records can be easily viewed, edited, or deleted.
-   **Dashboard & Statistics**: A dynamic dashboard presents key calculated metrics based on the logged refill data. This includes:
    -   Total number of refills.
    -   Total amount spent on fuel.
    -   Overall average fuel consumption (in Km/Litre and Litres/100Km).
    -   Overall average cost per Km (calculated after the first refill).
    -   Detailed statistics for each refill interval (after the first refill), such as distance driven, fuel quantity, km/L, L/100km, cost/km, and days since the last refill.
-   **Trend Visualization**: The dashboard features interactive charts (available after two refills are logged) to help users visualize trends over time. These charts display:
    -   Fuel consumption history (Litres/100Km).
    -   Cost per kilometer over time.
    -   Number of days between refills.
-   **User-Friendly Interface**: The application provides a clean, web-based interface, making it easy for users to access, input, and manage their fuel data from any device with a web browser.

## Technology Stack

-   **Backend**: Node.js, Express.js
-   **Frontend**: EJS (Embedded JavaScript templates) for views
-   **Database**: SQLite
-   **Charts**: Chart.js for data visualization

## Before You Start: Essential Tools & Concepts

Before diving into setting up and running the application, let's cover a few basic concepts and tools you'll encounter. This will help make the process smoother, especially if you're new to this kind of software.

### Understanding a Few Basics (For Complete Beginners)

*   **What is this app?**
    This Fuel Refill Management App is a small **web application** that runs locally on your own computer. You'll access it through your web browser, just like any other website, but it's private to you. It's not something you download from an app store; instead, you run its code directly.

*   **What is a Server?**
    In simple terms, when you run this app, it acts like a mini-website hosted on your computer. We call this a local **server**. It's not out on the public internet for everyone to see; it's just on your machine for your personal use.

*   **What is Code?**
    Think of **code** like a detailed recipe or a set of instructions. It's written in special programming languages that tell your computer exactly how to make the application work, display information, and respond to your actions.

### About Key Tools You'll Use

You'll interact with a couple of key tools to get the application running. Don't worry; we'll guide you through using them.

1.  **A Code Editor (Recommended, but not strictly required to *run* the app)**

    *   **What it is:** While not strictly needed just to *run* the app, a **code editor** is very useful if you ever want to look at the app's code or make changes in the future. Think of it like Microsoft Word or Google Docs, but specifically designed for writing, viewing, and managing programming code.
    *   **Recommendation:** We recommend **Visual Studio Code (VS Code)**. It's a popular, free code editor that works on Windows, macOS, and Linux.
    *   **Download Link (Optional):** If you're interested, you can download VS Code here: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

2.  **A Terminal (Command Prompt / PowerShell / Terminal)**

    *   **What it is:** The **Terminal** (also known as Command Prompt or PowerShell on Windows) is a text-based window where you can type commands to tell your computer what to do directly. This is how you'll install some necessary software and start the application. It might seem intimidating at first, but you'll only need to use a few specific commands that we'll provide.
    *   *(Specific instructions on how to open the Terminal for your operating system are included in the OS-specific installation guides below.)*

## Getting the Application Code

To run the Fuel Refill Management App, you first need to get a copy of its code files onto your computer. Here are two common ways to do this:

### Option 1: Download as ZIP (For Beginners)

This method is straightforward if you're not familiar with Git.

1.  **Download from Git Hosting Platform:**
    *   If the code is on a website like GitHub, GitLab, or Bitbucket, look for a "Code" button (it's usually green on GitHub).
    *   Click this button, and then select the "Download ZIP" option from the dropdown menu.
2.  **Save the ZIP File:**
    *   Your browser will download a `.zip` file (e.g., `fuel-app-main.zip` or `repository-name-main.zip`). Save this file to a location on your computer that you'll remember easily, such as your Desktop or your Documents folder.
3.  **Extracting the ZIP File:**
    *   Once the download is complete, find the ZIP file.
    *   **Windows:** Right-click on the ZIP file and choose "Extract All...". A dialog box will appear. Choose a destination for the extracted folder (or accept the default) and click "Extract". This will create a new folder containing all the code files.
    *   **macOS:** Double-click the ZIP file. macOS will automatically extract the contents into a new folder in the same location as the ZIP file.
4.  **The Application Folder:**
    *   The new folder created after extraction (e.g., `fuel-app-main`) is your main **application folder**.

### Option 2: Using Git (Recommended for easier updates)

Git is a version control system that helps manage code. Using Git makes it much easier to get updates to the application code in the future.

#### Checking for Git & Installing Git
1.  **Check if Git is Installed:**
    *   Open your Terminal (Command Prompt/PowerShell on Windows, Terminal on macOS/Linux).
    *   Type the command: `git --version` and press Enter.
    *   If you see a version number (e.g., `git version 2.30.1`), Git is installed.
    *   If you get an error or "command not found," you'll need to install Git.

2.  **Install Git (if needed):**
    *   Go to the official Git download page: [https://git-scm.com/downloads](https://git-scm.com/downloads).
    *   Download the installer for your operating system (Windows, macOS, or Linux) and follow the installation instructions provided on the website. Accepting the default options during installation is usually suitable for most users.

#### Cloning the Repository
*   "Cloning" creates a local copy of the code repository on your computer.
*   Open your Terminal.
*   Navigate to the directory where you want to store the application (e.g., your Documents folder or a dedicated projects folder). Use the `cd` command for this (e.g., `cd Documents`).
*   To clone the repository, use the `git clone` command followed by the repository's URL. Replace `<repository_url>` with the actual URL (e.g., `https://github.com/yourusername/fuel-app.git`):
    ```bash
    git clone <repository_url>
    ```
    This command will create a new folder in your current directory, named after the repository (e.g., `fuel-app`). This is your application folder.
*   **Cloning into a specific folder (Optional):** If you want to name the application folder something different or place it directly into a new folder, you can add a folder name at the end of the command:
    ```bash
    git clone <repository_url> your-chosen-folder-name
    ```
    This will create a folder named `your-chosen-folder-name` and put the cloned code inside it.

#### Updating the Code
*   One of the main benefits of using `git clone` is that you can easily get the latest updates to the application code.
*   To update:
    1.  Open your Terminal.
    2.  Navigate to the application folder using the `cd` command (e.g., `cd path/to/your-app-folder`).
    3.  Run the command:
        ```bash
        git pull origin main
        ```
        *(Note: The default branch might be `master` or another name for older repositories. If `main` doesn't work, check the repository's page for the correct default branch name.)*
    4.  This `git pull` command fetches any new changes from the online repository and attempts to merge them into your local copy, keeping your application up-to-date.

**The Application Folder (Your Local Copy)**

Regardless of which method you used (ZIP download or Git clone), you will now have an **application folder** on your computer. This folder contains all the files needed to run the app, such as `index.js`, `package.json`, and subfolders like `views` and `controllers`. You'll need to navigate into this folder in your Terminal for the next setup steps.

## Installation and Running the App (OS-Specific Guides)

This section provides tailored installation instructions for different operating systems. Please follow the guide that matches your computer's OS.

### For Windows 11 Users

This guide provides specific instructions for Windows 11 users to get the Fuel Refill Management App up and running.

#### Step 1: Open Your Terminal (Command Center)

Your **Terminal** is where you'll type commands to interact with your computer and the application.

*   **How to Open:**
    *   Windows 11 offers a few ways. We recommend using **Windows Terminal**.
    *   Click the **Start Menu** (the Windows icon, usually on your taskbar).
    *   Type "Terminal" and click on the "Terminal" app when it appears in the search results.
    *   Inside Windows Terminal, you can open different kinds of command-line "shells." **PowerShell** is a modern and recommended choice for Windows. If your Windows Terminal doesn't open PowerShell by default, you can usually click a dropdown menu (often a `+` or `v` icon) in the tab bar to open a new tab specifically with PowerShell. Command Prompt is also available.

#### Step 2: Check for / Install Node.js and npm

Node.js is the environment that runs the application's JavaScript code, and npm (Node Package Manager) helps install additional tools the app needs.

*   **Check if Node.js and npm are Already Installed:**
    1.  In your open Terminal (PowerShell) window, type the following command and press Enter:
        ```powershell
        node -v
        ```
    2.  If Node.js is installed, you'll see a version number (e.g., `v18.12.1`).
    3.  Next, type this command and press Enter:
        ```powershell
        npm -v
        ```
    4.  If npm is installed, you'll see its version number (e.g., `9.8.1`).
    *   If both commands show version numbers (Node.js v14 or later is recommended), you can skip to **Step 3**. If you get an error like "command not found," you need to install them.

*   **Install Node.js and npm (if needed):**
    1.  **Download:** Open your web browser and go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/).
    2.  Download the **LTS (Long Term Support)** version installer for Windows. This is generally recommended for most users as it's the most stable. It will be an `.msi` file.
    3.  **Run the Installer:**
        *   Once downloaded, open the `.msi` file to start the installation.
        *   Follow the on-screen instructions in the setup wizard.
        *   **Crucially, ensure that the option to "Add to PATH" (or similar wording like "Add Node.js to your system path") is selected.** This is usually enabled by default and is very important for the `node` and `npm` commands to work easily from any directory in your Terminal.
        *   Accepting the other default options during installation is generally fine.
    4.  **Verify Installation:**
        *   **Important:** After the installation finishes, **close your current Terminal window and open a new one.** This ensures the Terminal recognizes the new software paths.
        *   In the new Terminal window, repeat the version check commands:
            ```powershell
            node -v
            npm -v
            ```
        *   You should now see version numbers for both. If not, try restarting your computer and checking again.

#### Step 3: Get the Application Code (Reference)

You should have already downloaded or cloned the application code as described in the main **"Getting the Application Code"** section above. Make sure you know where the application folder (e.g., `fuel-app-main`) is located on your computer.

*   **Windows Tip:** To easily copy the path of the application folder, navigate to it in File Explorer, then right-click on an empty space in the address bar at the top and select "Copy address as text," or select the folder and use the "Copy path" button in the ribbon/context menu.

#### Step 4: Navigate to the Application Folder in Terminal

You need to tell your Terminal to operate from within the application's main folder.

1.  In your Terminal (PowerShell) window, use the `cd` (Change Directory) command.
2.  Replace `C:\path\to\your\fuel-app-main` with the actual path you copied or noted.
    ```powershell
    cd C:\path\to\your\fuel-app-main
    ```
    For example, if it's on your Desktop and your username is "User":
    ```powershell
    cd C:\Users\User\Desktop\fuel-app-main
    ```
3.  Press Enter. Your Terminal prompt should change to show you're now "inside" that folder.
    *   **Drag-and-Drop Tip (PowerShell/Windows Terminal):** You can often type `cd ` (with a space after `cd`) into the Terminal, then drag the application folder directly from File Explorer into the Terminal window. It should automatically paste the correct path. Then press Enter.

#### Step 5: Install Application Dependencies

This step downloads and installs the specific software packages that this Fuel App relies on.

1.  Ensure your Terminal is still "inside" the application folder (from Step 4).
2.  Type the following command exactly and press Enter:
    ```powershell
    npm install
    ```
3.  **What this does:** `npm` reads a file named `package.json` in the app folder, which lists all necessary "dependencies" (helper tools and libraries). This command downloads and installs them into a new subfolder called `node_modules`.
4.  You'll see text scrolling as packages are downloaded and installed. This is normal. Wait for it to complete. You might see some "WARN" messages – these are usually okay.

#### Step 6: Run the Application

Now you'll start the application's local web server.

1.  Make sure your Terminal is still in the application folder.
2.  Type this command exactly and press Enter:
    ```powershell
    npm start
    ```
3.  **What this does:** This command runs the "start" script defined in the `package.json` file, which typically launches the Node.js application.
4.  You should see messages in the Terminal indicating the server is running, such as:
    `Server is running on http://localhost:3000`
    You might also see database connection messages like `Connected to the SQLite database.`
5.  **Important:** Do not close this Terminal window! As long as the app's server is running, this window needs to stay open. If you close it, the app will stop.

#### Step 7: Access the Application in Your Web Browser

1.  Open your preferred web browser (e.g., Edge, Chrome, Firefox).
2.  In the address bar at the top, type:
    ```
    http://localhost:3000
    ```
3.  Press Enter. You should now see the Fuel Refill Management App's home page.

#### Step 8: Stop the Application

When you're finished using the app:

1.  Go back to the Terminal window where the server is running.
2.  Press `Ctrl + C` (hold down the Ctrl key, then press C).
3.  You might be asked "Terminate batch job (Y/N)?". If so, type `Y` and press Enter.
4.  The server will stop, and you'll see your command prompt again. You can now safely close the Terminal window.

That's it! You've successfully installed and run the application on Windows 11. To run it again later, you'll just need to repeat Steps 4, 6, 7, and 8.

### For macOS Users

This guide provides specific instructions for macOS users to get the Fuel Refill Management App up and running.

#### Step 1: Open Your Terminal

Your **Terminal** is the application you'll use to type commands to interact with your computer and the application.

*   **How to Open:**
    *   The easiest way is to use **Spotlight Search**: Press `Cmd + Space` (Command key and Spacebar together), type "Terminal", and press Enter when the Terminal app appears.
    *   Alternatively, you can find it in **Applications > Utilities > Terminal**.

#### Step 2: Check for / Install Node.js and npm

Node.js is the environment that runs the application's JavaScript code, and npm (Node Package Manager) helps install additional tools the app needs.

*   **Check if Node.js and npm are Already Installed:**
    1.  In your open Terminal window, type the following command and press Enter:
        ```bash
        node -v
        ```
    2.  If Node.js is installed, you'll see a version number (e.g., `v18.12.1`).
    3.  Next, type this command and press Enter:
        ```bash
        npm -v
        ```
    4.  If npm is installed, you'll see its version number (e.g., `9.8.1`).
    *   If both commands show version numbers (Node.js v14 or later is recommended), you can skip to **Step 3**. If you get an error like "command not found," you need to install them.

*   **Install Node.js and npm (if needed):**

    You have a couple of good options:

    *   **Option A: Official Installer (Recommended for most users)**
        1.  **Download:** Open your web browser and go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/).
        2.  Download the **LTS (Long Term Support)** version installer for macOS. This is generally recommended as it's the most stable. It will be a `.pkg` file.
        3.  **Run the Installer:** Once downloaded, open the `.pkg` file from your Downloads folder. Follow the on-screen instructions in the setup wizard. Accepting the default options is generally fine.
        4.  **Verify Installation:** After the installation finishes, **quit your current Terminal (Cmd + Q) and open a new one.** This ensures the Terminal recognizes the new software. In the new Terminal window, repeat the version check commands:
            ```bash
            node -v
            npm -v
            ```
            You should now see version numbers for both.

    *   **Option B: Using Homebrew (For users familiar with it)**
        If you have [Homebrew](https://brew.sh/) installed on your Mac, you can install Node.js by typing the following command in your Terminal:
        ```bash
        brew install node
        ```
        After it finishes, check the versions in the same Terminal window:
        ```bash
        node -v
        npm -v
        ```

#### Step 3: Get the Application Code (Reference)

You should have already downloaded or cloned the application code as described in the main **"Getting the Application Code"** section above. Make sure you know where the application folder (e.g., `fuel-app-main`) is located.

*   **macOS Tip:** To easily get the path of the application folder, type `cd ` (with a space) in your Terminal, then drag the folder icon directly from Finder into the Terminal window. The full path will be pasted.

#### Step 4: Navigate to the Application Folder in Terminal

You need to tell your Terminal to operate from within the application's main folder.

1.  In your Terminal window, use the `cd` (Change Directory) command.
2.  Replace `/path/to/your/fuel-app-main` with the actual path to the folder (use the drag-and-drop tip if you like).
    ```bash
    cd /path/to/your/fuel-app-main
    ```
    For example, if it's on your Desktop and your username is "YourUserName":
    ```bash
    cd /Users/YourUserName/Desktop/fuel-app-main
    ```
3.  Press Enter. Your Terminal prompt should change, often showing the name of the folder you're now "inside."

#### Step 5: Install Application Dependencies

This step downloads and installs the specific software packages that this Fuel App relies on.

1.  Ensure your Terminal is still "inside" the application folder (from Step 4).
2.  Type the following command exactly and press Enter:
    ```bash
    npm install
    ```
3.  **What this does:** `npm` reads a file named `package.json` in the app folder, which lists all necessary "dependencies" (helper tools and libraries). This command downloads and installs them into a new subfolder called `node_modules`.
4.  You'll see text scrolling as packages are downloaded and installed. This is normal. Wait for it to complete. You might see some "WARN" messages – these are usually okay.

#### Step 6: Run the Application

Now you'll start the application's local web server.

1.  Make sure your Terminal is still in the application folder.
2.  Type this command exactly and press Enter:
    ```bash
    npm start
    ```
3.  **What this does:** This command runs the "start" script defined in the `package.json` file, which typically launches the Node.js application.
4.  You should see messages in the Terminal indicating the server is running, such as:
    `Server is running on http://localhost:3000`
    You might also see database connection messages like `Connected to the SQLite database.`
5.  **Important:** Do not close this Terminal window! As long as the app's server is running, this window needs to stay open. If you close it, the app will stop.

#### Step 7: Access the Application in Your Web Browser

1.  Open your preferred web browser (e.g., Safari, Chrome, Firefox).
2.  In the address bar at the top, type:
    ```
    http://localhost:3000
    ```
3.  Press Enter. You should now see the Fuel Refill Management App's home page.

#### Step 8: Stop the Application

When you're finished using the app:

1.  Go back to the Terminal window where the server is running.
2.  Press `Ctrl + C` (hold down the Control key, then press C).
3.  The server will stop, and you'll see your command prompt again. You can now safely close the Terminal window (Cmd + Q or click the red close button).

That's it! You've successfully installed and run the application on macOS. To run it again later, you'll just need to repeat Steps 4, 6, 7, and 8.

### For Linux Users

This guide provides specific instructions for Linux users to get the Fuel Refill Management App up and running. Commands may vary slightly depending on your specific Linux distribution.

#### Step 1: Open Your Terminal

Your **Terminal** (also known as a shell or command line) is where you'll type commands.

*   **How to Open:**
    *   The most common keyboard shortcut is `Ctrl + Alt + T`.
    *   Alternatively, search for "Terminal" in your applications menu (the name might vary slightly depending on your desktop environment, e.g., GNOME Terminal, Konsole, Xfce Terminal).

#### Step 2: Check for / Install Node.js and npm

Node.js runs the application's JavaScript code, and npm (Node Package Manager) installs additional tools the app needs.

*   **Check if Node.js and npm are Already Installed:**
    1.  In your open Terminal window, type the following command and press Enter:
        ```bash
        node -v
        ```
    2.  If Node.js is installed, you'll see a version number (e.g., `v18.12.1`).
    3.  Next, type this command and press Enter:
        ```bash
        npm -v
        ```
    4.  If npm is installed, you'll see its version number (e.g., `9.8.1`).
    *   If both commands show version numbers (Node.js v14 or later is recommended), you can skip to **Step 3**. If you get an error like "command not found," you need to install them.

*   **Install Node.js and npm (if needed):**
    Installation methods vary by Linux distribution. The most common way is through your distribution's package manager or by using NodeSource repositories for more up-to-date versions.

    *   **Option A: Using NodeSource Repositories (Recommended for specific/up-to-date versions like LTS)**
        1.  NodeSource provides scripts to add their repositories to your system, allowing you to install specific versions of Node.js.
        2.  Go to the NodeSource distributions documentation for detailed instructions: [https://github.com/nodesource/distributions#installation-instructions](https://github.com/nodesource/distributions#installation-instructions)
        3.  Follow the instructions there to add the Node.js LTS (Long Term Support) repository (e.g., v18.x, v20.x, or the current LTS) and install Node.js. This usually involves running a setup script provided by NodeSource and then an install command using your package manager.
        4.  **Example for Debian/Ubuntu-based systems for Node.js 20.x (LTS at time of writing - ALWAYS GET THE EXACT SCRIPT FROM NODESOURCE):**
            ```bash
            # curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
            # sudo apt-get install -y nodejs
            ```
            *(The `curl` command downloads and runs the NodeSource setup script; the `apt-get` command then installs Node.js and npm from the newly added repository.)*

    *   **Option B: Using Default Distribution Repositories (Might provide an older version)**
        You can use your distribution's default package manager. The Node.js version might be older than the current LTS.
        *   **For Debian/Ubuntu-based systems (e.g., Ubuntu, Mint):**
            ```bash
            sudo apt update
            sudo apt install nodejs npm
            ```
        *   **For Fedora and RHEL-based systems (e.g., CentOS, Rocky Linux):**
            ```bash
            sudo dnf install nodejs npm
            ```
            *(Often, installing `nodejs` on these systems will also include `npm`. If `npm` is not found after installing `nodejs`, you might need to install it separately, e.g., `sudo dnf install npm`.)*
        *   **For Arch Linux:**
            ```bash
            sudo pacman -S nodejs npm
            ```

    *   **Verify Installation:**
        After installation, **close and reopen your Terminal window** or run `hash -r` (or `source ~/.bashrc`, `source ~/.zshrc`, etc., depending on your shell and how Node.js was installed) to ensure your shell recognizes the new commands. Then, re-check the versions:
        ```bash
        node -v
        npm -v
        ```

#### Step 3: Get the Application Code (Reference)

You should have already downloaded or cloned the application code as described in the main **"Getting the Application Code"** section above. Make sure you know where the application folder (e.g., `fuel-app-main`) is located.

*   **Linux Tip:** To find the absolute path of the application folder, navigate into it using `cd` in your Terminal, and then run the `pwd` (print working directory) command. Many file managers also allow you to copy the path (behavior varies by desktop environment like GNOME Files, Dolphin, Thunar, etc.).

#### Step 4: Navigate to the Application Folder in Terminal

You need to tell your Terminal to operate from within the application's main folder.

1.  In your Terminal window, use the `cd` (Change Directory) command.
2.  Replace `/path/to/your/fuel-app-main` with the actual path to the folder.
    ```bash
    cd /path/to/your/fuel-app-main
    ```
    For example, if it's in a "Projects" folder in your home directory and your username is "user":
    ```bash
    cd /home/user/Projects/fuel-app-main
    ```
3.  Press Enter. Your Terminal prompt should change, often showing the name of the folder you're now "inside."

#### Step 5: Install Application Dependencies

This step downloads and installs the specific software packages that this Fuel App relies on.

1.  Ensure your Terminal is still "inside" the application folder (from Step 4).
2.  Type the following command exactly and press Enter:
    ```bash
    npm install
    ```
3.  **What this does:** `npm` reads a file named `package.json` in the app folder, which lists all necessary "dependencies." This command downloads and installs them into a `node_modules` subfolder.
4.  You'll see text scrolling as packages are installed. Wait for it to complete. "WARN" messages are usually okay.

#### Step 6: Run the Application

Now you'll start the application's local web server.

1.  Make sure your Terminal is still in the application folder.
2.  Type this command exactly and press Enter:
    ```bash
    npm start
    ```
3.  You should see messages indicating the server is running, such as:
    `Server is running on http://localhost:3000`
    And possibly database connection messages.
4.  **Important:** Do not close this Terminal window! It needs to stay open while the app is running.

#### Step 7: Access the Application in Your Web Browser

1.  Open your preferred web browser (e.g., Firefox, Chrome).
2.  In the address bar, type: `http://localhost:3000`
3.  Press Enter. You should see the app's home page.

#### Step 8: Stop the Application

When you're finished using the app:

1.  Go back to the Terminal window where the server is running.
2.  Press `Ctrl + C` (hold down the Control key, then press C).
3.  The server will stop. You can now safely close the Terminal window.

That's it! You've successfully installed and run the application on Linux. To run it again later, repeat Steps 4, 6, 7, and 8.

## Usage Guide

This guide explains how to use the main features of the Fuel Refill Management App.

### 1. Navigating the App

*   Once the app is running and you've opened it in your web browser (usually at `http://localhost:3000`), you'll see a navigation bar at the top of every page.
*   This bar contains links to the main sections of the application:
    *   **Home / Dashboard**: Shows your fuel statistics and charts.
    *   **Refills**: Allows you to view, add, edit, and delete your fuel refill records.
    *   **Settings**: Lets you set the default current fuel price.

### 2. Settings

The Settings page is where you can set a default fuel price. This price is then used automatically when you add new refill records.

*   **Accessing Settings:** Click on "Settings" in the navigation bar.
*   **Viewing Current Price:** You'll see a field displaying the "Current Fuel Price (Rs.)". This is the price that will be used as a default when you add a new refill.
*   **Updating the Price:**
    1.  Type the new fuel price into the input box.
    2.  Click the "Update Price" button.
*   **Effect of Change:** The price you set here will be used as the default for any *new* refills you add from this point forward. It does not change the fuel price for refills you have already logged in the past.

### 3. Managing Refills

This section is where you log and manage all your vehicle's fuel refills.

*   **Accessing Refills Page:** Click on "Refills" in the navigation bar.

*   **Viewing Refills:**
    *   This page displays a table listing all the fuel refills you've recorded.
    *   For each refill, you'll see details such as the date, odometer reading, total cost of the refill, and the fuel price per litre at the time of that specific refill.
    *   Refills are typically listed with the most recent ones first.

*   **Adding a New Refill:**
    1.  Click the "Add New Refill" button (usually found at the top of the refills list).
    2.  A form will appear. You need to fill in the following details:
        *   **Date:** Select the date when you refueled your vehicle. It defaults to the current day, but you can change it.
        *   **Odometer Reading (kms):** Enter your car's odometer reading at the time of the refill (e.g., `55200`). This should be just the number, without "km".
        *   **Refill Cost (Rs.):** Enter the total amount you paid for the fuel (e.g., `3000`).
        *   **Fuel Price (Rs./Litre) at time of refill:** This field will usually be pre-filled with the current fuel price you set in the "Settings" page. For new refills, this field is typically read-only to ensure consistency with your current setting.
    3.  Once all details are entered, click the "Save Refill" button. Your new refill will be added to the list.

*   **Editing an Existing Refill:**
    1.  In the list of refills, find the entry you wish to change.
    2.  Click the "Edit" button next to that refill entry.
    3.  The form will appear, pre-filled with the details of that specific refill.
    4.  You can now change any of the fields, including the date, odometer reading, cost, and importantly, the **Fuel Price** for that particular past refill (in case the default setting wasn't accurate for that day, or you made a mistake).
    5.  After making your changes, click the "Save Refill" button. The updated details will be saved.

*   **Deleting a Refill:**
    1.  In the list of refills, find the entry you want to remove.
    2.  Click the "Delete" button next to that refill entry.
    3.  A confirmation pop-up will appear asking if you're sure. Click "OK" to permanently delete the refill record, or "Cancel" to keep it.

### 4. Viewing the Dashboard

The Dashboard provides an overview of your fuel usage and spending habits based on the data you've logged.

*   **Accessing the Dashboard:** Click on "Home" or "Dashboard" in the navigation bar (they usually point to the same page).
*   **Understanding the Dashboard:**
    *   **Summary Cards:** At the top, you'll typically see several "cards" displaying key statistics at a glance. These can include:
        *   Total number of refills logged.
        *   Total amount of money spent on fuel.
        *   Overall average fuel efficiency (e.g., Km/Litre).
        *   Overall average fuel consumption rate (e.g., Litres/100Km).
        *   Overall average cost per kilometer (calculated if more than one refill is logged).
    *   **Charts:** Below the summary cards, you'll find visual graphs that help you see trends over time (these appear if more than one refill is logged). Common charts include:
        *   Fuel consumption history (e.g., Litres/100Km per refill interval).
        *   Cost per kilometer over time.
        *   The number of days that typically pass between your refills.
*   **Automatic Updates:** The dashboard automatically recalculates and updates all statistics and charts whenever you add, edit, or delete refill data, so it always reflects your current records.

This guide should help you get started with using the Fuel Refill Management App effectively!

## Future Enhancements

(To be added later)
