import os
import io
import sys
from jinja2 import Environment, FileSystemLoader

THIS_DIR = os.path.dirname(os.path.abspath(__file__))

component_name = raw_input("Name of component: ")
component_name = component_name[:1].upper() + component_name[1:]

def query_yes_no(question, default="yes"):
    valid = {"yes": True, "y": True, "ye": True,
             "no": False, "n": False}
    if default is None:
        prompt = " [y/n] "
    elif default == "yes":
        prompt = " [Y/n] "
    elif default == "no":
        prompt = " [y/N] "
    else:
        raise ValueError("invalid default answer: '%s'" % default)

    while True:
        sys.stdout.write(question + prompt)
        choice = raw_input().lower()
        if default is not None and choice == '':
            return valid[default]
        elif choice in valid:
            return valid[choice]
        else:
            sys.stdout.write("Please respond with 'yes' or 'no' "
                             "(or 'y' or 'n').\n")

presentational = query_yes_no("Is it a presentational component?")

component_state = query_yes_no("Should the component be stateful?")

j2_env = Environment(loader=FileSystemLoader(THIS_DIR), trim_blocks=True, lstrip_blocks=True)

javascript = j2_env.get_template('Template.js').render(
        component_name=component_name, presentational=presentational, component_state= component_state
    )

css = j2_env.get_template('Template.css').render(
        component_name=component_name
    )

path = './'+component_name

if not os.path.exists(path):
    os.makedirs(path)
    os.makedirs(path+"/css")
    os.makedirs(path+"/img")

with io.FileIO("./"+component_name+"/"+component_name+".jsx", "w") as file:
    file.write(javascript)

with io.FileIO("./"+component_name+"/css/"+component_name+".css", "w") as file:
    file.write(css)
