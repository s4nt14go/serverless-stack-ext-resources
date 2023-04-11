import S3Stack from "./S3Stack";
import CognitoStack from "./CognitoStack";
import DynamoDBStack from "./DynamoDBStack";
import * as cdk from "@aws-cdk/core";

// Add stacks
export default function main(app) {
  new DynamoDBStack(app, "dynamodb");

  const s3 = new S3Stack(app, "s3");

  new CognitoStack(app, "cognito", { bucketArn: s3.bucket.bucketArn });

  cdk.Tags.of(app).add("project", "sst-guide-ext-resources");
}

export function debugStack(app) {
  cdk.Tags.of(app).add("project", "sst-guide-ext-resources-debugStack");
}