import {z} from 'zod';

export const WishFormSchema = z.object({
  name: z.string().min(3, 'Minimal 3 karakter').max(60, 'Maximal 60 karakter'),
  wish: z.string().min(3, 'Minimal 3 karakter').max(300, 'Max 300 karakter'),
});

export const WishSchema = z.object({
  name: z.string(),
  wish: z.string(),
  createdAt: z.string(),
});

export const WishListSchema = z.array(WishSchema);

export type WishForm = z.infer<typeof WishFormSchema>;
export type Wish = z.infer<typeof WishSchema>;
export type WishList = z.infer<typeof WishListSchema>;
