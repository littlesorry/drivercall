Ext.define('dirvercall.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'username', type: 'auto' },
            { name: 'password', type: 'auto' },
            { name: 'displayName', type: 'auto' },
            { name: 'status', type: 'auto' },
            { name: 'location', type: 'auto' }

        ]
    }
});
