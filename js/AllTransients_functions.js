function AllTransients_List_Load_Query( filter, sort, offset, count, callback, delegator ) {
	return AJAX_Call_Module( callback,
							'admin',
							'tg_transients',
							'AllTransients_Load_Query',
							'&Filter=' + EncodeArray( filter ) +
							'&Sort=' + encodeURIComponent( sort ) +
							'&Offset=' + encodeURIComponent( offset ) +
							'&Count=' + encodeURIComponent( count ),
							delegator );
}

// On Delete
function AllTransients_Batchlist_Delete( tkey, callback, delegator ) {
	return AJAX_Call_Module( callback,
							'admin',
							'tg_transients',
							'Delete_Transient',
							'Transient_Key=' + encodeURIComponent( tkey ),
							delegator );
}

// Delete All
function AllTransients_Batchlist_Delete_All( callback ) {
	return AJAX_Call_Module( callback,
							'admin',
							'tg_transients',
							'Delete_All_Transients',
							'',
							'' );
}

// Delete Expired
function AllTransients_Batchlist_Delete_Expired( callback ) {
	return AJAX_Call_Module( callback,
							'admin',
							'tg_transients',
							'Delete_Expired_Transients',
							'',
							'' );
}