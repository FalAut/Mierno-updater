PlayerEvents.loggedIn((event) => {
    const { player, server } = event;
    const hostPlayer = server.getPlayers().stream().findFirst().orElse(null);
    if (hostPlayer.username != "Tyumen_" || player.persistentData.ftbteam) return;

    if (player.uuid == Tyumen_UUID) {
        player.runCommandSilent("/ftbteams party create Tyumen_");
        player.runCommandSilent("/ftbteams party settings_for Tyumen_ ftbteams:free_to_join true");
        player.tell(Text.green("检测到你是秋明，已自动创建队伍并设置自由加入").bold());
        player.persistentData.putBoolean("ftbteam", true);
    } else {
        player.runCommandSilent("/ftbteams party join Tyumen_");
        player.tell(Text.green("检测到联机房主是秋明，已自动加入秋明的队伍").bold());
        player.persistentData.putBoolean("ftbteam", true);
    }
});

FTBQuestsEvents.customReward("065A030FB09ED60E", (event) => {
    const { player, server } = event;
    const hostPlayer = server.getPlayers().stream().findFirst().orElse(null);

    if (hostPlayer.username == "Tyumen_") {
        player.tell(Text.red("检测到联机房主是秋明，无法通过任务获取转化桌").bold());
    } else {
        player.give("projecte:transmutation_tablet");
    }
});
