# 💰 Alexa Monzo

An Alexa Skill for interacting with Monzo.

## Prerequisites

* [AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html) currently supports **Node.js 4.3.2**, meaning there is support for a limited subset of the latest v8 JavaScript features. This project is currently targeted at this version. There is an exhaustive list of supported features on [node.green](http://node.green/).
* The [aws-cli](https://github.com/aws/aws-cli) is required for pushing to S3. You'll need your access keys configured for your chosen bucket.

## Capabilities

### Balance

> **Alexa, ask Monzo for my current balance.** 

> Your current balance is ____, you've spent _____ today

## Setup

To get set up, simply run:

```shell
npm install
```

## Deployment

### Amazon S3

To archive and upload to S3, simply run:

```
npm run deploy
```

### Zip Archive

You can also generate a .zip file which can be uploaded to AWS Lambda  using the following command:

```shell
npm run archive
```

The file will be outputted to `dist/lib.zip`.