'use strict';

function Notifications(AroFlo) {
    const self = this;

    /**
     * API call to retrieve all published notifications the user has access too.
     */
	this.getAllPublishedNotifications = async () => AroFlo.GraphQL
			.query("query { publishedNotifications { items { id timestampPosted timestampNotificationExpires timestampAlertExpires title description type isImportant isRead }}}")
			.then(json => json.data.publishedNotifications.items)
			.then(items => {
				items.forEach(item => {
					item.markAsRead = () => self.markNotificationAsRead(item.id);
					item.markAsUnread = () => self.markNotificationAsUnread(item.id);
				});
				return items;
			});


	/**
	 *	API call to mark a notification as being read by the current user.
	 */
	this.markNotificationAsRead = async (notificationId) => AroFlo.GraphQL
			.query("mutation($_ID: ID!) { markNotificationAsRead(id: $_ID) }", {
				_ID: notificationId
			}).then(json => true);


	/**
	 *	API call to mark a notification as being unread by the current user.
	 *
	 * @param callback
	 *      Optional callback function
	 */
	this.markNotificationAsUnread = async (notificationId) => AroFlo.GraphQL
			.query("mutation($_ID: ID!) { markNotificationAsUnread(id: $_ID) }", {
				_ID: notificationId
			}).then(json => true);

}

module.exports = Notifications;
module.exports.Notifications = Notifications;
