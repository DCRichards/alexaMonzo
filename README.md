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

### AWS Lambda

To archive, upload to S3 and deploy to AWS Lambda, simply run the following:

```shell
npm run deploy
```

### Archive

To generate the zip archive:

```shell
npm run archive
```

The file will be outputted to `dist/lib.zip`.

### S3

To upload the archived zip file to S3, run the following:

```shell
npm run s3
```
