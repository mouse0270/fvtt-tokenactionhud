export function registerSettings(app, updateSettings) {
    game.settings.register(app,'abbreviateSkills', {
        name: "Abbreviate skill and ability names",
        hint: "If enabled, skills and abilities will use a three-character abbreviation.",
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateSettings(value); }
    });
}