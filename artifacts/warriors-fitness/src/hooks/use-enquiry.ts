import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  goal: z.string().min(2, "Please select a fitness goal"),
  message: z.string().optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

// Mock hook since there is no backend
export function useSubmitEnquiry() {
  return useMutation({
    mutationFn: async (data: EnquiryInput) => {
      // Simulate API network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate successful response
      return { success: true, data };
    },
  });
}
