ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:item_inside",
        post: [
            {
                type: "prevent_default",
            },
            {
                type: "custom",
                id: "unstable_ingot_explosion",
            },
        ],
        item_in: [
            {
                item: "mierno:unstable_ingot",
            },
        ],
        block_in: "*",
    });
});
