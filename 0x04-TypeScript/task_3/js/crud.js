export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * 1000);
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  // No explicit return value needed
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
