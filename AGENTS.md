```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines are designed to ensure the development of robust, maintainable, and efficient AI coding agents within this repository. Adherence to these principles is mandatory for all development efforts.

## 1. DRY (Don't Repeat Yourself)

*   All code should have a single, well-defined purpose.
*   If a functionality is reused, it should be encapsulated into a reusable component or module.
*   Avoid duplicating logic or data structures across multiple files.
*   Refactor existing code to eliminate redundancies.

## 2. KISS (Keep It Simple, Stupid)

*   Code should be as concise and easily understandable as possible.
*   Prioritize clarity and readability.
*   Avoid unnecessary complexity.
*   Favor simple solutions over overly elaborate ones.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/component should have one, and only one, reason to change.
*   **Open/Closed Principle:**  The system should be extensible through mechanisms like APIs and modules, without modifying the core implementation.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients shouldn’t be forced to implement interfaces they don’t use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules.  Instead, they should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement features that are currently required.
*   Don't introduce functionality prematurely.
*   Defer implementation until the need is explicitly identified.

## 5. Code Formatting & Style

*   **Indentation:** Use 2 spaces for indentation.
*   **Line Length:** Maximum 120 characters per line.
*   **Naming Conventions:** Follow established naming conventions (e.g., camelCase for variables and functions, PascalCase for classes).
*   **Comments:** Add concise, informative comments where necessary to explain complex logic, but avoid excessive commenting.

## 6. File Size Limit (180 lines max)

*   All files must be no more than 180 lines of code.
*   Include a brief summary/docstring at the top of each file (approximately 50-70 lines).

## 7. Testing - Focus on Unit & Integration Tests Only

*   All tests *must* be unit and integration tests.
*   Mocking/faking implementations are permitted *only* for testing. No real implementations.
*   Test coverage should be at least 80%.
*   Automated test discovery and reporting mechanisms are required.

## 8. Data Management

*   Data should be handled consistently and reliably.
*   Use appropriate data structures for each purpose.
*   Document data structures and their usage clearly.

## 9.  Error Handling

*   Error handling should be explicit and informative.
*   Raise exceptions or return error codes when appropriate.
*   Log errors effectively.

## 10.  Code Structure & Organization

*   Use clear and logical grouping of code blocks.
*   Follow a consistent file structure.
*   Provide meaningful comments to explain complex sections of code.

## 11. Dependency Management

*   All dependencies should be explicitly declared in `requirements.txt`.
*   Version control dependencies appropriately.
*   Use a dependency management system for larger projects.

## 12.  Documentation

*   Provide a detailed README file explaining the project's purpose, architecture, and usage.
*   Include API documentation as appropriate.

## 13.  Traceability

*   Each function/class/module should have a unique identifier to facilitate tracing its interactions.
```