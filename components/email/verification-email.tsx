import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Button,
  Link,
  Hr,
  Tailwind,
} from "@react-email/components";

interface VerificationEmailProps {
  userName?: string;
  verificationUrl?: string;
}

const VerificationEmail = ({
  userName,
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html lang="en">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="bg-white max-w-xl mx-auto rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <Section className="text-center px-10 pt-10">
              <Img
                src="https://new.email/static/app/placeholder.png"
                alt="Logo"
                width="100"
                className="mx-auto mb-6"
              />
              <Heading className="text-2xl font-bold text-gray-900 mb-2">
                Confirm your email address
              </Heading>
              <Text className="text-gray-700 text-base">
                Hey {userName}, welcome aboard!
              </Text>
            </Section>

            {/* Main CTA */}
            <Section className="px-10 pt-6 text-center">
              <Text className="text-base text-gray-700 mb-6">
                Please verify your email to complete the signup process and secure your account.
              </Text>
              <Button
                href={verificationUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-sm no-underline"
              >
                Verify Email
              </Button>
            </Section>

            {/* Fallback Link */}
            <Section className="px-10 pt-6">
              <Text className="text-sm text-gray-600">
                Or copy and paste this URL into your browser:
              </Text>
              <Link
                href={verificationUrl}
                className="text-blue-600 text-sm break-all underline"
              >
                {verificationUrl}
              </Link>
            </Section>

            {/* Footer */}
            <Hr className="my-10 border-gray-200" />
            <Section className="text-center px-10 pb-10">
              <Text className="text-xs text-gray-500 mb-1">
                © 2025 Your Company. All rights reserved.
              </Text>
              <Text className="text-xs text-gray-500 mb-1">
                123 Startup Lane, Cityville, World 00001
              </Text>
              <Text className="text-xs text-gray-500">
                <Link href="#" className="underline text-gray-500">
                  Unsubscribe
                </Link>{" "}
                |{" "}
                <Link href="#" className="underline text-gray-500">
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// Preview in dev tools like Resend Studio or React Email Playground
VerificationEmail.PreviewProps = {
  userName: "John Doe",
  verificationUrl: "https://yourapp.com/verify?token=example123",
};

export default VerificationEmail;
