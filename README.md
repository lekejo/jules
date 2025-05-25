# Fuel Refill Management App

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

## Setup and Running the Application

### Installation Prerequisites (What You'll Need)

This section will guide you through setting up the necessary software to run the Fuel Refill Management App on your computer.

#### Understanding a Few Basics (For Complete Beginners)

*   **What is this app?**
    This Fuel Refill Management App is a small **web application** that runs locally on your own computer. You'll access it through your web browser, just like any other website, but it's private to you.

*   **What is a Server?**
    In simple terms, this app acts like a mini-website running on your computer. We call this a **server**. It's not out on the public internet, just on your machine for your personal use.

*   **What is Code?**
    Think of **code** like a detailed recipe. It's a set of instructions written in a special language that tells your computer exactly how to run this application and all its features.

#### Software You'll Need

1.  **Node.js and npm (Essential)**

    *   **What they are:**
        *   **Node.js** is a runtime environment – a kind of helper tool – that lets your computer understand and run the app's code (which is written in JavaScript).
        *   **npm (Node Package Manager)** is another helper tool that comes bundled with Node.js. It helps you easily download and manage other software packages (often called dependencies) that this app relies on to work.

    *   **How to check if you have them:**
        You'll need to use a "Terminal" or "Command Prompt" for this (see below if you're unsure what that is). Open it and type the following commands, pressing Enter after each one:
        ```bash
        node -v
        npm -v
        ```
        If you see version numbers printed for both (e.g., `v18.12.1` for node and `9.8.1` for npm), you're all set! The exact numbers don't need to match perfectly, as long as you have a reasonably recent version (Node.js v14 or later is recommended). If you get an error message like "command not found," you'll need to install them.

    *   **How to install Node.js and npm (if you don't have them):**
        Node.js and npm are installed together from one installer package.

        *   **Windows:**
            1.  Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
            2.  Download the **LTS** (Long Term Support) version. This is generally recommended for most users as it's the most stable and supported.
            3.  Run the downloaded installer (it's usually a `.msi` file). Follow the on-screen instructions. Accepting the default options during installation is usually fine for most users.
            4.  After installation, close and reopen your Command Prompt or PowerShell and try the `node -v` and `npm -v` commands again to verify the installation.

        *   **macOS:**
            1.  Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
            2.  Download the **LTS** version installer (it's usually a `.pkg` file).
            3.  Open the downloaded file and follow the installation instructions.
            4.  After installation, close and reopen your Terminal app and try the `node -v` and `npm -v` commands again to check if it worked.
            5.  (Optional, for users familiar with Homebrew: You can install it by opening Terminal and typing: `brew install node`)

        *   **Linux:**
            1.  Installation methods can vary slightly by Linux distribution. The best way is usually through your distribution's package manager.
            2.  You can find detailed instructions for your specific Linux version here: [Node.js Package Manager Docs](https://nodejs.org/en/download/package-manager/)
            3.  For example, on Debian-based systems like Ubuntu, you might open your Terminal and type commands like:
                ```bash
                sudo apt update
                sudo apt install nodejs npm
                ```
            4.  After installation, try `node -v` and `npm -v` in your terminal.

2.  **A Code Editor (Recommended, but not strictly required to *run* the app)**

    *   **What it is:**
        While not strictly needed just to *run* the app, a **code editor** is very useful if you ever want to look at the app's code or make changes. Think of it like Microsoft Word, but specifically designed for writing and viewing programming code.
    *   **Recommendation:**
        We recommend **Visual Studio Code (VS Code)**. It's free, very popular, and works on Windows, macOS, and Linux.
    *   **Download Link:**
        You can download VS Code here: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

3.  **A Terminal (Command Prompt / PowerShell / Terminal)**

    *   **What it is:**
        This is a text-based window where you can type commands to tell your computer what to do. We'll use it for a few steps like installing the app's dependencies and starting the application.
    *   **How to open it:**
        *   **Windows:** Search for "Command Prompt" or "PowerShell" in the Start Menu.
        *   **macOS:** Open "Spotlight Search" (by pressing Cmd + Space), type "Terminal", and press Enter.
        *   **Linux:** The shortcut is often Ctrl + Alt + T. Alternatively, search for "Terminal" in your applications menu.

With these prerequisites understood and installed, you'll be ready for the next steps to get the application running!

### Step-by-Step Installation and Running the App

This guide will walk you through getting the application code, setting it up, and running it on your computer.

#### 1. Getting the Application Code

You need to get a copy of the application's code files onto your computer. Here are two common ways:

*   **Option 1: Download as ZIP (Easiest for beginners)**
    *   If the code is hosted on a website like GitHub, look for a green "Code" button. Click it, and then choose the "Download ZIP" option.
    *   Save the ZIP file to a location on your computer that you'll remember easily, such as your Desktop or your Documents folder.
    *   **Extracting the ZIP file:**
        *   Once the download is complete, find the ZIP file (e.g., `fuel-app-main.zip`).
        *   **Windows:** Right-click on the ZIP file and choose "Extract All...". Follow the prompts, and it will create a new folder containing all the code files.
        *   **macOS:** Double-click the ZIP file. It will automatically extract its contents into a new folder.
        *   This new folder is your main application folder.

*   **Option 2: Using Git (If you're familiar with it)**
    *   If you have Git installed and prefer to use it, you can "clone" the repository. Open your Terminal (Command Prompt/PowerShell on Windows, Terminal on macOS/Linux).
    *   Type the following command, replacing `<repository_url>` with the actual web link for the code repository (e.g., a GitHub URL):
        ```bash
        git clone <repository_url>
        ```
    *   Press Enter. This will create a new folder containing the app's code in your current Terminal location.

*   **The App Folder:**
    Whichever option you chose, you should now have a folder on your computer. Inside this folder, you'll see files like `index.js`, `package.json`, and subfolders such as `views`, `controllers`, and `models`. This is your main **application folder**.

#### 2. Setting Up the Application

Now we need to tell your computer how to get this specific app ready.

*   **Navigate to the App Folder in Your Terminal:**
    *   Open your Terminal application (Command Prompt, PowerShell, or Terminal on Mac/Linux – refer to the "Installation Prerequisites" section if you're unsure how).
    *   You need to tell the Terminal to 'go into' the application folder you just downloaded or extracted. This is done using the `cd` (Change Directory) command.
    *   The exact `cd` command depends on where you saved/extracted the app folder. For example:
        *   If the folder is on your **Desktop** and is named `fuel-app-main`:
            *   On macOS/Linux: `cd Desktop/fuel-app-main`
            *   On Windows: `cd Desktop\fuel-app-main`
            *   (If your username is `user` and it's in Documents: `cd Documents/fuel-app-main` or `cd C:\Users\user\Documents\fuel-app-main` on Windows)
        *   **Pro Tip:** You can often type `cd ` (with a space after `cd`) and then drag the application folder directly from your file explorer window into the Terminal window. The Terminal should automatically paste the correct path to the folder!
    *   After typing the `cd` command, press Enter. Your Terminal prompt might change slightly, often showing the name of the folder you're now "inside."

*   **Install App-Specific Tools (Dependencies):**
    *   Once you're sure your Terminal is "inside" the application folder (e.g., `fuel-app-main`), type the following command *exactly* as shown and press Enter:
        ```bash
        npm install
        ```
    *   **What this does:** This command reads a special file in the app called `package.json`. This file lists all the extra little helper tools and code libraries that *this specific application* needs to work correctly. `npm install` automatically downloads and sets them up for you. Think of it as getting all the specific ingredients needed for our app's recipe.
    *   You'll see some text scrolling by in the Terminal as `npm` does its work. This is normal. Wait for it to finish.
    *   You might see some messages starting with "WARN" – these are usually just warnings and often don't mean anything is broken. As long as you don't see big red "ERROR" messages at the end, you should be good!

#### 3. Running the Application

Now that everything is set up, let's start the app!

*   **Start the App Server:**
    *   Make sure you are still in the application's folder in your Terminal (the same place where you ran `npm install`).
    *   Type the following command *exactly* as shown and press Enter:
        ```bash
        npm start
        ```
    *   **What this does:** This command looks at another instruction in the `package.json` file and starts the application's mini web server on your computer.
    *   You should then see a message in the Terminal, something like:
        `Server is running on http://localhost:3000`
        You might also see messages like `Connected to the SQLite database.` and `Refills table created or already exists.` This means the app has started successfully!
    *   **Important:** Don't close this Terminal window! As long as this window is open and showing these messages (or just a blinking cursor after them), the app is running. If you close this Terminal window, the application will stop.

*   **Accessing the App in Your Browser:**
    *   Open your favorite web browser (like Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).
    *   In the address bar at the very top of the browser window (where you usually type website addresses like `www.google.com`), type the following exactly:
        ```
        http://localhost:3000
        ```
    *   Press Enter.
    *   You should now see the Fuel Refill Management App's home page load in your browser! You can now click around and use the app.

#### 4. Stopping the Application (When You're Done)

When you're finished using the app, it's good practice to stop the server.

*   Go back to the Terminal window where the app is running (the one where you typed `npm start` and saw messages like "Server is running...").
*   Click into the Terminal window to make sure it's active.
*   Press `Ctrl + C` on your keyboard (hold down the Ctrl key and then press the C key). On some systems, you might need to press it once or twice.
*   The server will stop. The messages in the Terminal will stop updating, and you might see your normal command prompt again.
*   You can now safely close the Terminal window. If you try to access `http://localhost:3000` in your browser again, it won't load, which is expected.

That's it! You've successfully run the Fuel Refill Management App. To run it again in the future, just repeat steps **2. Setting Up the Application** (specifically, navigating to the app folder) and **3. Running the Application** (starting the server and accessing it in your browser). You typically don't need to run `npm install` again unless the application's code has been updated with new dependencies.

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
