#include "lists.h"

/**
 * insert_node - Add a number to a node.
 *
 * @head: This the linked list's head
 * @number: Number to be inputed
 *
 * Return: O when failure and pointer if otherwise.
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *node = *head, *new;

	new = malloc(sizeof(listint_t));
	if (new == NULL)
		return (NULL);
	new->n = number;

	if (node == NULL || node->n >= number)
	{
		new->next = node;
		*head = new;

		return (new);
	}
	while (node && node->next && node->next->n < number)
		node = node->next;
	new->next = node->next;
	node->next = new;

	return (new);
}
