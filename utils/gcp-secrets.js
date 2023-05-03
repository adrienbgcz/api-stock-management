import {SecretManagerServiceClient} from "@google-cloud/secret-manager";
const client = new SecretManagerServiceClient();

export default {

    async getSecretValue(secret, v = "latest") {
        let payload
        try {
            const [version] = await client.accessSecretVersion({
                name: `projects/${process.env.GOOGLE_CLOUD_PROJECT}/secrets/${secret}/versions/${v}`,
            });
            payload = version.payload.data.toString('utf8');
        } catch(e){
            console.error(e)
        }

        return payload;
    }

}


