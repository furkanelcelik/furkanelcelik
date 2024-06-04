# Final


## Week-5 - Error handing

### Functional Test


Check directory avaliable, if avaliable return 0 else 1 to $?
```bash
test -d /tmp/
echo $?         # Should be 0
```

these are same can be usable with if conditions
```bash
[ -d /tmp/ ]

[[ -d /tmp/ ]]
```


#### if conditions

```bash
if [[ ! -f ${FILE} ]]; then
    echo "File does not exist, stopping the script!"
    exit 1
fi
```

```bash
if [[ ! -f ${FILE} ]]; then
    echo "File does not exist, stopping the script!"
    exit 1
else
    cat ${FILE} # Print the file content.
fi
```


```bash
# Grab the first argument.fi
file_name=$1
# If the file exists, overwrite it with the always empty
file
# /dev/null; otherwise, touch it.
if [[ -f ${file_name} ]]; then
    cp /dev/null ${file_name}
else
    touch ${file_name}
fi


if [[ $? -ne 0 ]]; then
    echo "Check file name is exist, ${file_name}"
    exit 1
else
    echo "Success"
fi
```


Other condition checks

```bash
[[ -f /tmp/file ]]          # Test file Exist
[[ ! -f /tmp/file ]]        # Check not exist
[[ -n ${variable} ]]        # Check Veriable avaliability
[[ -z ${variable} ]]        # For veriable empty
[[ ! -z ${variable} ]]      # For veriable not empty
[[ ${variable} -ne 0 ]]     # Veriable not equal to 0

```

#### Veriable And User Inputs

Veriables are everytime is string in bash,


```bash
veriable=1
echo $(( ${hello_int} + 1 ))            # 1 + 1
```


```bash
read
    This is a random sentence!          # User write this sentence
echo $REPLY
    This is a random sentence!          # ıt is directly store on REPLY veriable
```

Other examples
```bash

read -p "What day is it? "
read -p "What day is it? " day_of_week
```


## Week-6 - Regex

grep, egrep, sed, set


**grep**

```bash
grep 'cool' grep-file.txt                               # Searches for the word "cool" in the file grep-file.txt.
cat grep-file.txt | grep 'USA'                          # Uses a pipe to pass the output of cat to grep and searches for the word "USA".
grep -i 'regular' grep-file.txt                         # Performs a case-insensitive search for the word "regular".
grep 'in' grep-file.txt                                 # Searches for the substring "in" anywhere in the lines of grep-file.txt.
grep ' the ' grep-file.txt                              # Searches for the whole word "the" surrounded by spaces.
grep 'e.e' character-class.txt                          # Uses the dot (.) to match any single character between two 'e's.
grep 'aaa*' character-class.txt                         # Uses the asterisk (*) to match zero or more occurrences of 'a' after 'aa'.
grep 'f[ao]r' grep-file.txt                             # Matches either "far" or "for".
grep 'reali[sz]e' grep-file.txt                         # Matches both "realise" and "realize".
grep '^error' file.txt                                  # Searches for lines starting with "error".
grep '\.$' file.txt                                     # Searches for lines ending with a dot.
grep -v '^$' file.txt                                   # Prints all lines except empty lines.
grep -o 'cool' grep-file.txt                            # Prints only the matching word "cool".
grep -c 'status installed' dpkg.log                     # Counts the number of lines containing "status installed".
grep -q 'keyword' file.txt                              # Quietly checks if "keyword" exists in file.txt.
```

**sed**

```bash
echo "What a wicked sentence" | sed 's/wicked/stupid/'  # Replaces "wicked" with "stupid" in the input string.
cat search.txt | sed 's/wood/stone/g'                   # Replaces all instances of "wood" with "stone" in search.txt.
sed -i 's/wood/stone/g' search.txt                      # Edits search.txt in place, replacing "wood" with "stone".
echo -e "Hi,\nthis is \nPatrick" | sed '1d'             # Deletes the first line of the input.
echo -e "Hi,\nthis is \nPatrick" | sed '/Patrick/d'     # Deletes lines containing the word "Patrick".
sed 's/stone //g' -e 's/stone//g' search.txt            # Removes the word "stone" and the space after it from search.txt.
echo -e "Hi,\nthis is \nPatrick" | sed '/Patrick/d'     # Deletes lines containing the word "Patrick".
sed 's/stone //g' -e 's/stone//g' search.txt            # Removes the word "stone" and the space after it from search.txt.
```

**egrep**

```bash
egrep -w '[[:lower:]]{5}' grep-file.txt                 # Searches for words exactly five characters long using extended regular expressions.
egrep -w '[[:lower:]]{7}' grep-file.txt                 # Searches for words exactly seven characters long using extended regular expressions.
egrep -w '[[:alpha:]]{7}' grep-file.txt                 # Searches for words exactly seven characters long, including both upper and lower case letters.
egrep -w '[[:lower:]]{5,}' grep-file.txt                # Searches for words with five or more characters.
egrep -w '[[:alpha:]]{,3}' grep-file.txt                # Searches for words with up to three characters.
egrep '.{40,}' grep-file.txt                            # Searches for lines with 40 or more characters.
egrep 'f(a|o)r' grep-file.txt                           # Matches "far" or "for".
egrep '(USA|UK)' grep-file.txt                          # Matches either "USA" or "UK".
```

## Week-7 - Testing and Scripting Loops

```bash

if [ condition ]
then
  # commands
else
  # other commands
fi

```


```bash

if [[ $variable =~ ^[0-9]+$ ]]; then
  echo "The variable is a number"
else
  echo "The variable is not a number"
fi


```


```bash

#!/bin/bash
read -p "Enter a number: " number
if [[ ! $number =~ ^[0-9]+$ ]]; then
  echo "Invalid input. Please enter a number."
else
  echo "The number is $number"
fi

```

```bash

if [ condition1 ]; then
  # commands for condition1
elif [ condition2 ]; then
  # commands for condition2
else
  # commands for other conditions
fi

```


```bash

if [ condition1 ]; then
  if [ condition2 ]; then
    # commands for condition2
  else
    # commands for condition1 else
  fi
else
  # commands for condition1 else
fi


```


**The while Loop** 

```bash

#!/bin/bash
counter=0
while [ $counter -lt 10 ]; do
  echo "Counter: $counter"
  counter=$((counter + 1))
done


```

**The until Loop**

```bash

#!/bin/bash
counter=10
until [ $counter -le 0 ]; do
  echo "Counter: $counter"
  counter=$((counter - 1))
done

```

**Creating an Interactive while Loop**

```bash

#!/bin/bash
while true; do
  read -p "Guess the number (1-10): " guess
  if [ $guess -eq 7 ]; then
    echo "Correct!"
    break
  else
    echo "Try again!"
  fi
done

```


**The for Loop**

```bash

for value in {1..5}; do
  echo "Value: $value"
done


```


```bash

for (( counter=0; counter<10; counter++ )); do
  echo "Counter: $counter"
done


```

```bash

#!/bin/bash
for file in /var/log/*.log; do
  echo "Processing $file"
done

```

**Loop Control**

```bash
for i in {1..10}; do
  if [ $i -eq 5 ]; then
    break
  fi
  echo "Number: $i"
done


```

```bash
for i in {1..10}; do
  if [ $((i % 2)) -eq 0 ]; then
    continue
  fi
  echo "Odd Number: $i"
done

```


```bash
#!/bin/bash
while true; do
  for i in {1..3}; do
    if [ $i -eq 2 ]; then
      break 2
    fi
    echo "Inner Loop: $i"
  done
  echo "Outer Loop"
done

```

## Week-8 - Pipes and Redirection in Scripts

Standard Input (stdin): /dev/fd/0
Standard Output (stdout): /dev/fd/1
Standard Error (stderr): /dev/fd/2


password=$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c20)




İnclude std err to pipe

command1 |& command2





## Week-9 - Functions

```bash
check_arguments() {
  if [[ $# -lt 1 ]]; then
    echo "Less than 1 argument received."
    exit 1
  fi
  local expected_arguments=$1
  shift
  if [[ ${expected_arguments} -ne $# ]]; then
    return 1
  fi
}

check_integer() {
  if [[ ! $1 =~ ^-?[0-9]+$ ]]; then
    return 1
  fi
  return 0
}

check_yes_no() {
  if [[ $# -ne 1 ]]; then
    echo "Need exactly one argument."
    exit 1
  fi
  if [[ ${1,,} = 'y' || ${1,,} = 'yes' ]]; then
    return 0
  elif [[ ${1,,} = 'n' || ${1,,} = 'no' ]]; then
    return 1
  else
    echo "Neither yes or no."
    exit 2
  fi
}

```



## Week-10 Cron scheeduling



2.1. at
The at command is used for ad hoc scheduling. Syntax is close to natural language. Example:

```bash
Copy code
bahasen@ubuntu:~/scripts/chapter_14$ date
Sat Nov 24 11:50:12 UTC 2018

bahasen@ubuntu:~/scripts/chapter_14$ at 11:51
warning: commands will be executed using /bin/sh
at> wall "Hello bahasens!"
at> <EOT>
job 6 at Sat Nov 24 11:51:00 2018

Broadcast message from bahasen@ubuntu (somewhere) (Sat Nov 24 11:51:00 2018):
Hello bahasens!

```