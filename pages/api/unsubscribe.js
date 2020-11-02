/* eslint-disable no-console */
const mailchimp = require('@mailchimp/mailchimp_marketing');
const crypto = require('crypto')

export default async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    
    try {
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        // identify the data center: <key>-us3.
        const DATACENTER = API_KEY.split('-')[1];
        
        // Auth
        mailchimp.setConfig({
            apiKey: API_KEY,
            server: DATACENTER,
        });

        // Data
        const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest("hex");
        const data = {
            status: 'unsubscribed'
        };
  
        // Send a POST request to Mailchimp.
        const response = await mailchimp.lists.updateListMember(LIST_ID, subscriberHash, data);

        if (response.status >= 400) {
            console.log(response);
            return res.status(400).json({
                error: `Error: There was an error subscribing. It could be that you already unsubscribed. Contact me and I can remove you out :)`
            });
        }

        return res.status(201).json({ error: '' });
    } catch (error) {
        console.log(error);

        if (error.status === 404) {
            return res.status(400).json({
                error: `Seems like you're already unsubscribed. Otherwise contact me and I can remove you out :)`
            });
        }
        return res.status(500).json({ error: error.message || error.toString() });
    }
};