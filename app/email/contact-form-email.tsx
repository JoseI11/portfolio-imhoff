import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
export default function ContactFormEmail({ message,senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
            <Container>
                <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md ">
                    <Heading className="leading-tight">
                        You received the following message from the contact form
                        <Text>
                            {message}
                        </Text>
                        <Hr />
                        <Text>
                            The sender's email is: {senderEmail}
                        </Text>
                    </Heading>
                </Section>
            </Container>
        </Body>
      </Tailwind>
      <Head></Head>
    </Html>
  );
}
