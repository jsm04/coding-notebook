# Decorators

Decorator Evaluation
There is a well defined order to how decorators applied to various declarations inside of a class are applied:

Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
Parameter Decorators are applied for the constructor.
Class Decorators are applied for the class.

## Class Decorators

A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition. A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a declare class).

The expression for the class decorator will be called as a function at runtime, with the constructor of the decorated class as its only argument.

If the class decorator returns a value, it will replace the class declaration with the provided constructor function.

## Method Decorators

A Method Decorator is declared just before a method declaration. The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition. A method decorator cannot be used in a declaration file, on an overload, or in any other ambient context (such as in a declare class).

## Parameter Decorators

A Parameter Decorator is declared just before a parameter declaration. The parameter decorator is applied to the function for a class constructor or method declaration. A parameter decorator cannot be used in a declaration file, an overload, or in any other ambient context (such as in a declare class).
