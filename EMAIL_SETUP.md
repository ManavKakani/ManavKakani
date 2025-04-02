# Setting Up Email Functionality for Your Portfolio

This document explains how to set up the contact form to send emails to your address: manav.kakani@techanek.com

## EmailJS Setup

The portfolio uses [EmailJS](https://www.emailjs.com/) to send emails directly from the client-side JavaScript without needing a server. Follow these steps to set it up:

1. **Create an EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - The free plan allows 200 emails per month

2. **Connect an Email Service**:
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service" and choose your preferred email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. **Create an Email Template**:
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Design your email template with the following variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Save your template

4. **Update Your Portfolio Code**:
   - Open `index.html` and replace `YOUR_PUBLIC_KEY` with your EmailJS public key (found in Account > API Keys)
   - Open `script.js` and update the following:
     - Replace `'service_id'` with your EmailJS service ID
     - Replace `'template_id'` with your EmailJS template ID
     - Replace `'user_id'` with your EmailJS user ID (same as public key)

## Example Template

Here's an example of what your email template might look like:

```
Subject: New Contact Form Submission: {{subject}}

You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

## Testing

After setting up EmailJS:

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email (manav.kakani@techanek.com) to see if you received the message

If you encounter any issues, check the browser console for error messages.

## Security Note

EmailJS public keys are meant to be exposed in client-side code. However, to prevent abuse:

1. Set up reCAPTCHA in your EmailJS account
2. Set domain restrictions in your EmailJS dashboard to only allow emails from your portfolio domain

For more information, visit the [EmailJS documentation](https://www.emailjs.com/docs/). 