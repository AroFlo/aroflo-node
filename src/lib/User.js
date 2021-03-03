function User(userData) {

    // declare private members
    let id = null;
    let displayName = null;
    let avatarUrl = null;
    let permissions = {};

    // init this object
    _init(userData);

    /**
     * init this object based on the user data
     *
     * @param data
     * @private
     */
    function _init(data = {}) {

        // make sure the data is an object
        if (typeof data !== 'object') {
            data = {};
        }

        if (data.hasOwnProperty('id')) {
            id = data.id;
        }

        if (data.hasOwnProperty('displayName')) {
            displayName = data.displayName;
        }

        if (data.hasOwnProperty('avatarUrl')) {
            avatarUrl = data.avatarUrl;
        }

        if (data.hasOwnProperty('permissions')) {
            permissions = _parsePermissions(data.permissions);
        }
    }

    /**
     * parse the permissions from an array into an object
     * when we look up for a permission, we don't need to loop entire array to check if the user is has the permission
     *
     * from ["p1", "p2", "p3]
     * to {
     *     p1: "",
     *     p2: "",
     *     p3: ""
     * }
     *
     * @param permissions
     * @returns {*}
     * @private
     */
    function _parsePermissions(permissions = []) {
        if (!Array.isArray(permissions)) {
            permissions = [];
        }

        return permissions.reduce((a,b)=> ({
            ...a,
            [b]: ''
        }),{});
    }

    function getId() {
        return id;
    }

    function getDisplayName() {
        return displayName;
    }

    function getAvatarUrl() {
        return avatarUrl;
    }

    function getPermissions() {
        return permissions;
    }

    function hasPermission(permission) {
        return permissions.hasOwnProperty(permission.toLowerCase());
    }

    // general permission checks
    function canList(component) {
        return hasPermission(`${component}:list`);
    }

    function canView(component) {
        return hasPermission(`${component}:view`);
    }

    function canCreate(component) {
        return hasPermission(`${component}:create`);
    }

    function canEdit(component) {
        return hasPermission(`${component}:edit`);
    }

    function canDelete(component) {
        return hasPermission(`${component}:delete`);
    }

    // component fields check
    function canViewField(component, field) {
        return hasPermission(`${component}:field:${field}:view`);
    }

    function canAddField(component, field) {
        return hasPermission(`${component}:field:${field}:add`);
    }

    function canEditField(component, field) {
        return hasPermission(`${component}:field:${field}:edit`);
    }

    function canRemoveField(component, field) {
        return hasPermission(`${component}:field:${field}:remove`);
    }

    // component type checks
    function canListType(component, type) {
        return hasPermission(`${component}:type:${type}:list`);
    }

    function canViewType(component, type) {
        return hasPermission(`${component}:type:${type}:view`);
    }

    function canCreateType(component, type) {
        return hasPermission(`${component}:type:${type}:create`);
    }

    function canEditType(component, type) {
        return hasPermission(`${component}:type:${type}:edit`);
    }

    function canDeleteType(component, type) {
        return hasPermission(`${component}:type:${type}:delete`);
    }

    function canViewFilter(component, filter) {
        return hasPermission(`${component}:filter:${filter}:view`)
    }

    // return methods for public access
    return {
        getId,
        getDisplayName,
        getAvatarUrl,
        getPermissions,
        hasPermission,
        canList,
        canView,
        canCreate,
        canEdit,
        canDelete,
        canViewField,
        canAddField,
        canEditField,
        canRemoveField,
        canListType,
        canViewType,
        canCreateType,
        canEditType,
        canDeleteType,
        canViewFilter
    }
}

module.exports = User;