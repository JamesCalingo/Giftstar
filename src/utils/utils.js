export function handleSetValue( object, callback, value, field) {
    callback({ ...object, [field]: value })
}