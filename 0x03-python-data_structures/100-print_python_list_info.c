#include <Python.h>
#include <object.h>
#include <listobject.h>

/**
 * print_python_list_info - It is used to print infoormation of the pylists.
 * @p: Represents an object list in python.
 */
void print_python_list_info(PyObject *p)
{
	long int size = PyList_Size(p);
	int index;
	PyListObject *obj = (PyListObject *)p;

	printf("[*] Size of the Python List = %li\n", size);
	printf("[*] Allocated = %li\n", obj->allocated);
	for (index = 0; index < size; index++)
		printf("Element %i: %s\n", index, Py_TYPE(obj->ob_item[index])->tp_name);
}
