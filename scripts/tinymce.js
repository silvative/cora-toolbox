Hooks.on("ready", () => {
    CONFIG.TinyMCE.plugins += " searchreplace visualchars visualblocks template";
    CONFIG.TinyMCE.toolbar += " | searchreplace template";
    CONFIG.TinyMCE.visualchars_default_state = true;
    CONFIG.TinyMCE.visualblocks_default_state = true;
    CONFIG.TinyMCE.template_selected_content_classes += "cora-contents";
    CONFIG.TinyMCE.templates = CONFIG.TinyMCE.templates ?? [];
    CONFIG.TinyMCE.templates.push(
        {
            title: 'AV Aside',
            description: 'Aside box for AV',
            url: 'modules/pf2e-cora-toolbox/blocks/av-aside.html'
        },
        {
            title: 'AV Instructional',
            description: 'Instructional box for AV',
            url: 'modules/pf2e-cora-toolbox/blocks/av-instructional.html'
        },
        {
            title: 'Encounter Box',
            description: 'Encounter box template',
            url: 'modules/pf2e-cora-toolbox/blocks/box-encounter.html'
        },
        {
            title: 'Exploration Box',
            description: 'Exploration box template',
            url: 'modules/pf2e-cora-toolbox/blocks/box-exploration.html'
        },
        {
            title: 'Basic Save',
            description: 'Basic saving throw template',
            url: 'modules/pf2e-cora-toolbox/blocks/check-save.html'
        },
        {
            title: 'Skill check',
            description: 'Skill check template',
            url: 'modules/pf2e-cora-toolbox/blocks/check-skill.html'
        },
        {
            title: 'Side image',
            description: 'Image template',
            url: 'modules/pf2e-cora-toolbox/blocks/image-right.html'
        },
        {
            title: 'Compartment Box',
            description: 'Compartment box template',
            url: 'modules/pf2e-cora-toolbox/blocks/box-compartment.html'
        }
    );
});