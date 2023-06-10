#ifndef LISTS_H
#define LISTS_H

#include <stddef.h>

/**
 * struct listint_s - the structure of the singly-linked list
 * @n: represents an int
 * @next: refers to the node that's next
 *
 * Description: the structure of the node of the singly-linked list
 */
typedef struct listint_s
{
    int n;
    struct listint_s *next;
} listint_t;

size_t print_listint(const listint_t *h);
listint_t *add_nodeint_end(listint_t **head, const int n);
void free_listint(listint_t *head);

int is_palindrome(listint_t **head);

#endif
