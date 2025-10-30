
-- Migration: 20251030152733
-- Create registrations table for E.D.I.T.H 1.0 event
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  department TEXT NOT NULL,
  year_of_study TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add email constraint for uniqueness
CREATE UNIQUE INDEX registrations_email_idx ON public.registrations(email);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert registrations (public event)
CREATE POLICY "Anyone can register for event" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing own registration
CREATE POLICY "Users can view their own registration" 
ON public.registrations 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;
