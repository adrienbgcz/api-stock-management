const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();

export default {
    async getSecretValue(secret, v = "latest") {
        const [version] = await client.accessSecretVersion({
            name: `projects/${process.env.GOOGLE_CLOUD_PROJECT}/secrets/${secret}/versions/${v}`,
        });
        const payload = version.payload.data.toString('utf8');
        console.log("SECRET VALUE", payload)
        return payload;
    }
}

