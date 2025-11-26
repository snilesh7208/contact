>> (mere liye)
netlify pe deply karo> proejct configuration me kao > sctoll up karo left hand me env varibale open karo > ab variables enter karo. done>
this is Netlify Functions + SMTP (FREE) method 
future refernce k eliye hai yeh notes 
>>>>> good luck bro.



# 🚀 How to Integrate This Contact Form into Another Project

Want to use this free, serverless contact form in another website? Follow these steps.

## 📂 1. Copy Required Files
Copy the following files/folders from this project to your new project's root directory:

1.  **`netlify/` folder**: Contains the backend logic (`netlify/functions/send-email.js`).
2.  **`package.json`**: Manages dependencies.
3.  **`netlify.toml`**: Configures Netlify build settings.
4.  **`script.js`**: Handles the form submission.
5.  **`style.css`**: (Optional) If you want the same styling.

## 📝 2. Add the HTML Form
Copy the form code into your desired HTML page (e.g., `contact.html`):

```html
<!-- Add this inside your <body> -->
<div class="contact-form">
    <form id="contact-form">
        <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required>
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" id="submit-btn">Send Message</button>
        <p id="form-status" style="display: none;"></p>
    </form>
</div>

<!-- Link the script at the end of body -->
<script src="script.js"></script>
```

## 📦 3. Install Dependencies
Open your terminal in the new project folder and run:
```bash
npm install
```
*(This installs `nodemailer` defined in `package.json`)*

## ☁️ 4. Netlify Configuration
When you deploy the new project to Netlify, you **MUST** set the environment variables again:

1.  Go to **Site Configuration > Environment Variables**.
2.  Add:
    *   `SMTP_USER`: Your Gmail address.
    *   `SMTP_PASS`: Your Gmail App Password.

## ✅ Done!
Your new project now has a working contact form that sends emails directly to your Gmail for free!

===
(mere liye)
netlify pe deply karo> proejct configuration me kao > sctoll up karo left hand me env varibale open karo > ab variables enter karo. done>
this is Netlify Functions + SMTP (FREE) method 
future refernce k eliye hai yeh notes 
>>>>> good luck bro.


