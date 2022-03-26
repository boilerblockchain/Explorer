import { useCallback } from "react";
import { useCurrentUser } from "/lib/user";

const Navbar = () => {
    const { data: { user } = {}, mutate } = useCurrentUser();

    const onSignOut = useCallback(async () => {
        try {
            await fetcher("/api/auth", {
            method: "DELETE",
        });
        mutate({ user: null });
        } catch (e) {
            toast.error(e.message);
        }
    }, [mutate]);

    return (
        /* ... */
        <button onClick={onSignOut}>Sign out</button>
        /* ... */
    );
};