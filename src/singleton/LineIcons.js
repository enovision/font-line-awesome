/**
 * see: https://icons8.com/line-awesome
 */
Ext.define('FontLineAwesome.singleton.LineIcons', {

    singleton: true,
    alternateClassName: ['Licons', 'Licon', 'LineIcons'],

    $configStrict: false, // surpresses warnings

    config: {
        diamond: 'las la-gem',
        gem: 'las la-gem',
        link: 'las la-link',
        unlink: 'las la-unlink',
        undo: 'las la-undo-alt',
        settings: 'las la-cog',
        industry: 'las la-industry',
        factory: 'las la-industry',
        wrench: 'las la-wrench',
        stock: 'las la-warehouse',
        shoppingCart: 'las la-shopping-cart',
        table: 'las la-table',
        pin: 'las la-thumbtack',
        tasks: 'las la-tasks',
        cog: 'las la-cog',
        cogs: 'las la-cogs',
        new: 'las la-plus',
        add: 'las la-plus',
        edit: 'las la-edit',
        save: 'las la-save',
        archive: 'las la-archive',
        page: 'las la-file-alt',
        dot: 'lab la-first-order-alt',
        bullseye: 'las la-bullseye',
        star: 'las la-star',
        keyboard: 'las la-keyboard',
        circle: 'las la-circle',
        camera: 'las la-camera',
        dashboard: 'las la-tachometer-alt',
        question: 'las la-question-circle',
        help: 'las la-question-circle',
        history: 'las la-history',
        delete: 'las la-trash-alt',

        microchip: 'las la-microchip',
        puzzle: 'las la-puzzle-piece',

        software: 'las la-cubes',
        website: 'las la-globe',
        legal: 'las la-balance-scale',
        security: 'las la-shield-alt',
        key: 'las la-key',
        lock: 'las la-lock',
        lockOpen: 'las la-lock-open',

        download: 'las la-cloud-download-alt',
        upload: 'las la-cloud-upload-alt',

        info: 'las la-info-circle',
        filter: 'las la-filter',
        comment: 'las la-comment',

        database: 'las la-database',

        note: 'las la-comment-alt',

        document: 'las la-file-alt',
        file: 'las la-file-alt',
        fileWord: 'las la-file-word',
        filePdf: 'las la-file-pdf',
        fileImage: 'las la-file-image',
        fileVideo: 'las la-file-video',
        fileExcel: 'las la-file-excel',

        video: 'las la-video',
        send: 'las la-paper-plane',
        move: 'las la-arrows-alt',
        search: 'las la-search',
        credits: 'las la-trophy',
        calendar: 'las la-calendar',
        clock: 'las la-clock',

        flag: 'las la-flag',
        flagFinish: 'las la-flag-checkered',

        mouse: 'las la-mouse',
        cross: 'las la-times',
        tick: 'las la-check',
        check: 'las la-check',
        ok: 'las la-check',
        view: 'las la-eye',
        cancel: 'las la-ban',
        wait: 'las la-hourglass',
        home: 'las la-home',
        trash: 'las la-trash',
        recycle: 'las la-recycle',
        close: 'las la-times-circle',

        protect: 'las la-user-shield',

        login: 'la-sign-in-alt',
        logout: 'las la-sign-out-alt',

        powerOff: 'las la-power-off',

        maleMars: 'las la-mars',
        male: 'las la-male',
        femaleVenus: 'las la-venus',
        female: 'las la-female',
        transgender: 'las la-transgender',
        genderless: 'las la-genderless',

        email: 'las la-envelope',
        print: 'las la-print',
        copy: 'las la-copy',
        paste: 'las la-paste',

        thumbUp: 'las la-thumbs-up',
        thumbDown: 'las la-thumbs-down',
        handshake: 'las la-handshake',

        teacher: 'las la-chalkboard-teacher',
        student: 'las la-graduation-cap',
        chalkboard: 'las la-chalkboard',
        report: 'las la-chalkboard',
        monitor: 'las la-chalkboard',

        smile: 'las la-smile',
        frown: 'las la-frown',

        phone: 'las la-phone',
        mobile: 'las la-mobile',

        user: 'las la-user',
        users: 'las la-users',
        userFriends: 'las la-user-friends',
        userTimes: 'las la-user-times',
        userSecret: 'las la-user-secret',
        userProtect: 'las la-user-shield',
        child: 'las la-child',

        previous: 'las la-arrow-left',
        next: 'las la-arrow-right',
        zoomIn: 'las la-search-plus',
        zoomOut: 'las la-search-minus',

        sort: 'las la-sort',
        sortUp: 'las la-sort-up',
        sortDown: 'las la-sort-down',
        sortAlphaUp: 'las la-sort-alpha-up',
        sortAlphaDown: 'las la-sort-alpha-up',
        sortNumUp: 'las la-sort-numeric-up',
        sortNumDown: 'las la-sort-numeric-down',
        sortAmount_asc: 'las la-sort-amount-up',
        sortAmount_desc: 'las la-sort-amount-down',

        toggleOn: 'las la-toggle-on',
        toggleOff: 'las la-toggle-off',

        chartPie: 'las la-chart-pie',
        chartLine: 'las la-chart-line',
        chartBar: 'las la-chart-bar',
        flask: 'las la-flask',

        folder: 'las la-folder',
        folderOpen: 'las la-folder-open',
        list: 'las la-list',

        bell: 'las la-bell',
        ringer: 'las la-bell',
        reminder: 'las la-bell',

        // colors
        red: '#f60202',
        green: '#307203',
        blue: '#05479a',
        yellow: '#746601',
        black: '#000',
        white: '#fff',
        gray: '#6d6d6d',
        grayDark: '#3d3d3d',
        orange: '#ff9900',
        purple: '#9b00bf',
    },

    constructor: function (config) {
        let me = this, source;
        me.initConfig(config);

        let util = me.utilities;

        me.applyFunction('isTrue', util.isTrue.bind(me))
            .applyFunction('crossTick', util.crossTick.bind(me))
            .applyFunction('tick', util.tick.bind(me))
            .applyFunction('cross', util.cross.bind(me))
            .applyFunction('renderModified', util.renderModified.bind(me));

        Ext.iterate(me.getConfig(), function (key, item) {
            if (item.substr(0, 2) === 'la') {
                source = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
                me.setColoredIcons(source);
            }
        });

    },

    /**
     * Sets an icon as in a <i class=""></i> construction
     * @param prop name of existing property
     * @param baseProp name of the new property (must be unique)
     * @param color optional color
     * @param cls optional class
     * @param size optional size as in `lg` `sm`
     * @returns {FontLineAwesome.singleton.LineIcons}
     */
    setIcon: function (prop, baseProp, color = null, cls = null, size = null) {
        let me = this, xtIcon, xtSize, xtClass, xtColor, xtValue;

        if (!me.hasOwnProperty(prop)) {

            if (typeof baseProp === 'string' && baseProp.indexOf(' ') >= 0) {
                xtValue = baseProp;
                me.setConfig(prop, () => xtValue);
                me.deployColoredIcons = false;
                me.setColoredIcons(prop);

                me.deployColoredIcons = false;
                me.setIcon(`${prop}Color`, prop, color);

            } else {

                xtIcon = me[baseProp]();

                if (xtIcon) {
                    xtSize = size === null ? 'la-lg' : `la-${size}`;
                    xtClass = cls === null ? xtIcon : cls;
                    xtColor = color === null ? '' : `style="color:${color};"`;
                    xtValue = `<i class="la-${prop} ${xtClass} ${xtSize}" ${xtColor}></i>`;

                    if (!me.hasOwnProperty(prop)) {
                        me.setConfig(prop, () => xtValue);
                    }

                    if (color === null) {
                        if (me.deployColoredIcons) {
                            me.setColoredIcons(prop);
                        }
                    }
                }
            }

            me.deployColoredIcons = true;
        }

        return me;
    },

    applyFunction: function (fnName, callbackFn) {
        let me = this;
        let newFn;

        if (!me.hasOwnProperty(fnName)) {
            newFn = {};
            newFn[fnName] = callbackFn;
            Ext.apply(me, newFn);
        }

        return me;
    },

    utilities: {

        isTrue: (val) => {
            return typeof (val) !== 'undefined' && ['Yes', 'yes', 'ja', 'Ja', 1, '1', true].indexOf(val) >= 0;
        },

        crossTick: function (val) {
            let me = this;
            return me.isTrue(val) ? me.getTickGreen() : me.getCrossRed();
        },

        tick: function (val) {
            let me = this;
            return me.isTrue(val) ? me.getTickGreen() : '';
        },

        cross: function () {
            let me = this;
            return me.getCrossIcon();
        },

        renderModified: function (val, meta, record) {
            let me = this;
            let mod = record.get('modified');

            if (me.isTrue(mod)) {
                meta.tdCls = 'y-grid3-updated-cell';
            }

            return val;
        }
    },

    privates: {
        deployColoredIcons: false,

        setColoredIcons: function (source) {
            let me = this, icon, color, colorGet;

            Ext.iterate(me.getConfig(), function (key, value) {
                if (value.substr(0, 2) !== 'la') {
                    color = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;
                    colorGet = `get${color}`;

                    /* getSomethingIcon non-colored */
                    icon = `${source}Icon`;
                    me.deployColoredIcons = false;
                    me.setIcon(icon, source);

                    /* getSomethingIconRed */
                    icon = `${source}Icon${color}`;
                    me.deployColoredIcons = false;
                    me.setIcon(icon, source, me[colorGet]());

                    /* getSomethingRed */
                    icon = `${source}${color}`;
                    me.deployColoredIcons = false;
                    me.setIcon(icon, source, me[colorGet]());
                }
            });
        }
    }
});