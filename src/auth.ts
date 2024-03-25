import { AZURE_AD_CLIENT_ID, AZURE_AD_CLIENT_SECRET, AZURE_AD_TENANT_ID } from "$env/static/private"
import { SvelteKitAuth } from "@auth/sveltekit"
import azureAd from "@auth/sveltekit/providers/azure-ad"

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [
    azureAd({
      //To replicate the issue, replace the below values with your own Azure AD values
      clientId: AZURE_AD_CLIENT_ID,
      clientSecret: AZURE_AD_CLIENT_SECRET,
      tenantId: AZURE_AD_TENANT_ID
  })],
    debug: true
})
