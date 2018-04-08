# Table of Contents

* [Introduction](#introduction)
* [Documentaion](#documentation)
* [Fun Fact](#fun-fact)
* [Thanks](#thanks)

# Introduction

Padachihn is a RESTful web API that gives you information about your footprint on Internet. Your IP address, language and the operating system you are on.

# Documentation

__Base URL:__ `https://padachihn.herokuapp.com`

## Get Information

* __URL__

    `/footprint`

* __Method__

    `GET`

* __Success Response__

    * __Code:__ 200 OK

    * __Content:__

        ```json
        {
            "ipaddress":"203.xxx.xxx.xxx",
            "language":"en-US",
            "software":"Windows NT 10.0; Win64; x64"
        }
        ```

* __Sample Call__

    ```
    curl --request GET \
      --url 'https://padachihn.herokuapp.com/footprint'
    ```

# Fun Fact

`Padachihn` in `Hindi` means `Footprint`.

# Thanks

To [Irene Ros](https://github.com/iros) for the doc [template](https://gist.github.com/iros/3426278).

#### Signing-off v1.1, Abhay Kumar