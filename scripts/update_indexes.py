import sys
from pathlib import Path


def usage():
    print("Usage: script.py [--exclude folder_name] [--types] <folder1> <folder2> ...")
    sys.exit(1)


def generate_index_file(root_folder, exclude_folder):
    root_path = Path(root_folder).resolve()
    index_file = root_path / "index.ts"

    # Check if the folder exists
    if not root_path.is_dir():
        print(f"Error: Folder {root_folder} does not exist.")
        return

    # Search for .ts, .tsx, and .astro files, excluding index.ts and the exclude folder
    files = [
        f
        for f in list(root_path.rglob("*.ts*")) + list(root_path.rglob("*.astro"))
        if f.name != "index.ts"
        and (not exclude_folder or exclude_folder not in f.parts)
    ]

    # Generate the content of the index.ts file
    lines = []
    for file in files:
        relative_path = file.relative_to(root_path)
        export_name = file.stem  # File name without extension
        import_path = relative_path.as_posix()  # Convert to JS compatible format
        if file.suffix == ".astro":
            lines.append(
                f"export {{ default as {export_name} }} from './{import_path}';"
            )
        elif "types" in root_folder:
            lines.append(f"export type {{ {export_name} }} from './{import_path}';")
        else:
            lines.append(f"export {{ {export_name} }} from './{import_path}';")

    # Write the index.ts file
    with index_file.open("w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"index.ts updated successfully in {root_folder}!")


def main():
    if len(sys.argv) < 2:
        usage()

    exclude_folder = None
    args = sys.argv[1:]

    # Process arguments
    if "--exclude" in args:
        exclude_index = args.index("--exclude")
        if len(args) <= exclude_index + 1:
            print("Error: Missing folder name for --exclude.")
            usage()
        exclude_folder = args[exclude_index + 1]
        args = args[:exclude_index] + args[exclude_index + 2 :]

    if not args:
        usage()

    # Generate index.ts for each folder
    for folder in args:
        generate_index_file(folder, exclude_folder)


if __name__ == "__main__":
    main()
