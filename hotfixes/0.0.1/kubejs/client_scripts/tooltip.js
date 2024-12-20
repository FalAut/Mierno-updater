ItemEvents.tooltip((event) => {
    let shiftTooltipItems = [
        { item: "mierno:fired_crucible", lines: 5 },
        { item: "mierno:oak_crucible", lines: 3 },
        { item: "mierno:ancient_aura_generator_core", lines: 6 },
        { item: "mierno:dream_lantern", lines: 4 },
        { item: "mierno:colossal_furnace_core", lines: 7 },
        { item: "mierno:modular_runic_altar_core", lines: 3 },
        { item: "mierno:terrestrial_agglomeration_crystal", lines: 3 },
        { item: "botania:third_eye", lines: 4 },
        { item: "mierno:memory_source_drawing_crystal_core", lines: 5 },
        { item: "occultism:divination_rod", lines: 4 },
    ];

    shiftTooltipItems.forEach((shiftTooltipItem) => {
        const { item, lines } = shiftTooltipItem;

        event.addAdvanced(item, (item, advanced, text) => {
            if (!event.shift) {
                text.add(1, Text.translate("tooltip.mierno.hold_shift", Text.yellow("Shift")).gold());
            } else {
                text.add(1, Text.translate("tooltip.mierno.hold_shift", Text.white("Shift")).darkGray());

                let itemId = item.id.split(":")[1];

                for (let i = 1; i <= lines; i++) {
                    text.add(i + 1, Text.translate(`tooltip.mierno.${itemId}_${i}`).gold());
                }
            }
        });
    });

    event.add("oak_sapling", Text.translate("tooltip.mierno.oak_sapling").gold());
    event.add("mierno:oak_mortar", Text.translate("tooltip.mierno.oak_mortar").gold());
    event.add("mierno:dream_latern", Text.translate("tooltip.mierno.dream_latern").gold());
    event.add("botania:black_lotus", Text.translate("tooltip.mierno.black_lotus").gold());
    event.add(
        ["mierno:source_flower", "mierno:flowing_source_flower"],
        Text.translate("tooltip.mierno.source_flower").gray().italic(true)
    );
    event.add("mierno:dream_wings", Text.translate("tooltip.mierno.dream_wings").gold());
    event.add("mierno:addition_sigil", Text.translate("tooltip.mierno.addition_sigil").gold());
    event.add("mierno:division_sigil", Text.translate("tooltip.mierno.division_sigil").gold());
    event.add("mierno:fire_starter", Text.translate("tooltip.mierno.fire_starter").gold());

    event.add("mierno:gensousitu_bucket", [
        Text.translate("tooltip.mierno.gensousitu_bucket_1").gold(),
        Text.translate("tooltip.mierno.gensousitu_bucket_2").gold(),
    ]);
    event.add("mierno:whos_gift", Text.translate("tooltip.mierno.whos_gift").gold());
    event.add("composter", Text.translate("tooltip.mierno.composter").gold());

    const cobbleGenData = [
        { tier: 1, cobbleCount: 1, time: 6, maxBuffer: 64 },
        { tier: 2, cobbleCount: 2, time: 5, maxBuffer: 128 },
        { tier: 3, cobbleCount: 4, time: 4, maxBuffer: 192 },
        { tier: 4, cobbleCount: 8, time: 3, maxBuffer: 256 },
        { tier: 5, cobbleCount: 16, time: 2, maxBuffer: 512 },
        { tier: 6, cobbleCount: 32, time: 1, maxBuffer: 1024 },
    ];

    cobbleGenData.forEach((data) => {
        event.add(`mierno:cobble_gen_tier${data.tier}`, [
            Text.translate("tooltip.mierno.cobble_gen_1", data.cobbleCount.toFixed(0)).gold(),
            Text.translate("tooltip.mierno.cobble_gen_2", data.time.toFixed(0)).gold(),
            Text.translate("tooltip.mierno.cobble_gen_3", data.maxBuffer.toFixed(0)).gold(),
            Text.translate("tooltip.mierno.cobble_gen_4").green(),
        ]);
    });

    event.add("mierno:portable_crafting_table", [
        Text.translate("tooltip.mierno.portable_crafting_table_1").gold(),
        Text.translate(
            "tooltip.mierno.portable_crafting_table_2",
            Text.keybind("key.mierno.portable_crafting").green()
        ).gold(),
    ]);

    event.add(
        [
            "thermal:tin_ore",
            "thermal:lead_ore",
            "thermal:silver_ore",
            "thermal:nickel_ore",
            "powah:uraninite_ore_poor",
            "powah:uraninite_ore",
            "powah:uraninite_ore_dense",
        ],
        Text.translate("tooltip.mierno.misty_forest_ore").gold()
    );

    event.add("minecraft:feather", Text.translate("tooltip.mierno.feather").gold());
    event.add("fluxnetworks:flux_dust", Text.translate("tooltip.mierno.flux_dust").gold());
    event.add("mierno:colorless_gem", Text.translate("tooltip.mierno.colorless_gem").gold());
    event.add("mierno:unstable_ingot", Text.translate("tooltip.mierno.unstable_ingot").gold());
    event.add("mierno:unstable_singularity", Text.translate("tooltip.mierno.unstable_singularity").gold());
    event.add("mierno:source_fluidlink", [
        Text.translate("tooltip.mierno.source_fluidlink_1").gold(),
        Text.translate("tooltip.mierno.source_fluidlink_2").gold(),
    ]);
    event.add("wizards_reborn:orbital_fluid_retainer", [
        Text.translate("tooltip.mierno.orbital_fluid_retainer_1").gold(),
        Text.translate("tooltip.mierno.orbital_fluid_retainer_2").gold(),
    ]);
    event.add("ars_nouveau:source_jar", Text.translate("tooltip.mierno.source_jar").gold());
});
