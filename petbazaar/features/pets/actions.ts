'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPet(formData: FormData) {
  const supabase = await createClient();

  const { data: authData, error: authError } = await supabase.auth.getUser();
  if (authError || !authData.user) {
    throw new Error('You must be logged in to create a pet listing.');
  }

  const name = formData.get('name') as string;
  const breed = formData.get('breed') as string;
  const ageMonths = parseInt(formData.get('ageMonths') as string, 10);
  const price = parseFloat(formData.get('price') as string);
  const description = formData.get('description') as string;

  if (!name || !breed || isNaN(ageMonths) || isNaN(price)) {
    throw new Error('Invalid input data');
  }

  const { data, error } = await supabase
    .from('pets')
    .insert({
      seller_id: authData.user.id,
      name,
      breed,
      age_months: ageMonths,
      price,
      description,
      status: 'available',
    } as any)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create pet listing: ${error.message}`);
  }

  revalidatePath('/pets');
  redirect(`/pets/${(data as any).id}`);
}
