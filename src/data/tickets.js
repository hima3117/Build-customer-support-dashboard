export const tickets = [
  {
    id: 1,
    customer: {
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      phone: "+91 98765 43210",
    },
    subject: "Unable to login to my account",
    description:
      "I am unable to login to my account even after resetting my password. The system keeps showing an invalid credentials error.",
    priority: "High",
    status: "Open",
    createdAt: "2026-09-20T09:30:00",
    messages: [
      {
        id: 1,
        sender: "Aarav Sharma",
        message:
          "I am unable to login to my account. I have already tried resetting my password.",
        time: "2026-09-20T09:30:00",
      },
      {
        id: 2,
        sender: "Support",
        message:
          "Hi Aarav, we are looking into the issue. We will get back to you shortly.",
        time: "2026-09-20T10:15:00",
      },
    ],
  },
  {
    id: 2,
    customer: {
      name: "Priya Mehta",
      email: "priya.mehta@example.com",
      phone: "+91 98123 45678",
    },
    subject: "Payment was deducted but order failed",
    description:
      "The payment was successfully deducted from my bank account, but my order is still showing as failed.",
    priority: "High",
    status: "In Progress",
    createdAt: "2026-09-19T12:45:00",
    messages: [
      {
        id: 1,
        sender: "Priya Mehta",
        message:
          "My payment was deducted but the order failed. Please check.",
        time: "2026-09-19T12:45:00",
      },
      {
        id: 2,
        sender: "Support",
        message:
          "We have forwarded your payment details to our billing team.",
        time: "2026-09-19T13:20:00",
      },
    ],
  },
  {
    id: 3,
    customer: {
      name: "Rohan Verma",
      email: "rohan.verma@example.com",
      phone: "+91 97654 32109",
    },
    subject: "How can I update my profile?",
    description:
      "I want to update my profile information but I cannot find the option in my account.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-09-18T15:20:00",
    messages: [
      {
        id: 1,
        sender: "Rohan Verma",
        message: "Where can I update my profile information?",
        time: "2026-09-18T15:20:00",
      },
      {
        id: 2,
        sender: "Support",
        message: "You can update your profile from Settings > Profile.",
        time: "2026-09-18T15:45:00",
      },
    ],
  },
  {
    id: 4,
    customer: {
      name: "Sneha Kapoor",
      email: "sneha.kapoor@example.com",
      phone: "+91 98989 11223",
    },
    subject: "Refund not received",
    description:
      "My refund was approved several days ago, but I have not received the amount yet.",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-09-17T11:10:00",
    messages: [
      {
        id: 1,
        sender: "Sneha Kapoor",
        message: "My refund has not arrived yet.",
        time: "2026-09-17T11:10:00",
      },
    ],
  },
  {
    id: 5,
    customer: {
      name: "Kabir Singh",
      email: "kabir.singh@example.com",
      phone: "+91 99001 22334",
    },
    subject: "Application is running slowly",
    description:
      "The application takes a long time to load whenever I open the dashboard.",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2026-09-16T16:35:00",
    messages: [
      {
        id: 1,
        sender: "Kabir Singh",
        message: "The dashboard is taking too long to load.",
        time: "2026-09-16T16:35:00",
      },
      {
        id: 2,
        sender: "Support",
        message:
          "Our technical team is investigating the performance issue.",
        time: "2026-09-16T17:00:00",
      },
    ],
  },
  {
    id: 6,
    customer: {
      name: "Ananya Gupta",
      email: "ananya.gupta@example.com",
      phone: "+91 98770 44556",
    },
    subject: "Unable to download invoice",
    description:
      "The invoice download button is not working for my recent purchase.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2026-09-15T10:25:00",
    messages: [
      {
        id: 1,
        sender: "Ananya Gupta",
        message: "I cannot download my invoice.",
        time: "2026-09-15T10:25:00",
      },
      {
        id: 2,
        sender: "Support",
        message:
          "The issue has been fixed. Please try downloading the invoice again.",
        time: "2026-09-15T11:05:00",
      },
    ],
  },
];