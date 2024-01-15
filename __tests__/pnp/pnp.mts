const pnp_core = await import("@pnp/core");

export function getRandomStringWrapper() {
    return pnp_core.getRandomString(5)
}