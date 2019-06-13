#!/bin/bash

main() {
	if [[ -n $1 ]] && [[ -f $1 ]]; then

		echo "["
		echo

		# Convert CSV to JSON format
		local output=$(sed -E "s/^(.*); (.*)$/\{\"q\" : \"\1\",\n \"a\" : \"\2\"},\n/g" $1)

		echo $output |
			sed '$s/,$//' | # Remove comma from final entry
			sed -E "s/(,\s)/\1\n/g" | # Restore newlines after each comma
			sed -E "s/(},\s)/\1\n/g" # Add additional newline after each entry

		echo
		echo "]"
	else
		printHelp
	fi

	return
}

printHelp() {
	echo "# Help"
	echo ""
	echo "------"
	echo "Quiz items Q/A vals must be delimited by ';'"
	echo "Provide filepath to CSV file as arg1"

	return
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi

