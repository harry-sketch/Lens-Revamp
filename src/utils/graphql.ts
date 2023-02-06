import { createClient } from "urql";

const clientUrl = "https://api.lens.dev/";

export const client = createClient({ url: clientUrl });
