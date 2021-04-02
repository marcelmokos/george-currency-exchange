---
to: .editorconfig
---
# EditorConfig: http://EditorConfig.org
# EditorConfig Properties: https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties

# top-most EditorConfig file
root = true

### defaults
[*]
charset = utf-8

# Unix-style newlines with
end_of_line = lf

# Max line length
max_line_length = 80

# 2 space indentation
indent_size = 2
indent_style = space

# remove any whitespace characters preceding newline characters
trim_trailing_whitespace = true

# newline ending every file
insert_final_newline = true

# Denotes preferred quoting style for string literals
quote_type = double

### custom for markdown
[*.md]
# do not remove any whitespace characters preceding newline characters
trim_trailing_whitespace = false

# java
[*.{java,class,groovy,gradle,xml,setting,properties}]
indent_size=4

