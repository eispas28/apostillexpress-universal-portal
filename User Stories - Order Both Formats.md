# Order Both Formats — User Stories
Screen: **Billing and Payment** (Order Summary). Applies to Standard and In-Person (Appointment) orders.

**Digital** = e-Apostille emailed to recipients. **Paper** = physical Apostille, mailed or picked up. **Twin** = the linked line item created when the other format is added.

---

## OBF-1 Discover the option
**As a** customer reviewing my order, **I want** to know I can add the other format, **so that** I can get both before I pay.

- **Given** at least one item has no twin and the order has fewer than 35 items, **when** I open Billing and Payment, **then** an info banner at the top of the Order Summary card reads "Need both formats? Add a paper Apostille to a digital order, or a digital Apostille to a paper order, before you check out. Use the Add button under any order below."
- **Given** every item already has a twin, or the order has 35 items, **when** I open the page, **then** the banner is not shown.
- **Given** the banner is shown, **then** it uses the info style and is announced by screen readers.

## OBF-2 Start adding the other format
**As a** customer, **I want** a clear action on each eligible item, **so that** I can add the other format for that document.

- **Given** a digital item without a twin, **then** it shows "+ Add Paper Apostille" under the description and a "+" icon button in Actions (tooltip "Add Paper Apostille").
- **Given** a paper item without a twin, **then** it shows "+ Add Digital Apostille" and the matching icon button.
- **When** I select either control, **then** the Add a Paper / Digital Apostille modal opens (640px) with "We'll add a copy of [document] as a paper/digital Apostille."
- **When** I cancel, press Esc or close, **then** nothing changes.
- **Given** a twin exists, **then** both items hide the add controls.
- Controls are keyboard reachable and have accessible labels.

## OBF-3 Add a paper Apostille — Standard order
**As a** customer with a digital order, **I want** to set how the paper copy is fulfilled and where it goes, **so that** it reaches me.

- **Given** step 1 "Mailing Information" (Step 1 of 2), **when** no Fulfilment Type is chosen, **then** Continue is disabled.
- **Given** Pre-paid Shipping Label, **then** Tracking Number is required.
- **Given** Mailed via USPS or International Shipping, **then** a Mailing Information block appears (address source defaulting to Customer Address, plus name, email, phone, organization, title, address, country, state, city, ZIP) and its required fields must be filled to continue.
- **Given** step 2 "Return Address", **when** I attempt to add with required fields empty, **then** they show "Required".
- **When** I select Back, **then** step 1 keeps my entries.
- **When** I select Add to Order, **then** the button shows "Adding…" with a spinner and buttons are disabled; on success the modal closes and a toast reads "Successfully added paper Apostille — A paper Apostille was added to your order."

## OBF-4 Add a paper Apostille — In-Person order
**As a** customer with an in-person order, **I want** to add paper without entering addresses, **so that** I can collect it at my appointment.

- **Given** an In-Person (Appointment) order, **when** the modal opens, **then** it is a single step reading "This order is handled in person, so no mailing address or return address is needed."
- **Then** fulfilment is set to Pick-Up and no fields are required.
- **When** I select Add to Order, **then** the paper item is added with the same success toast as OBF-3.

## OBF-5 Add a digital Apostille — Standard order
**As a** customer with a paper order, **I want** to upload the document and name recipients, **so that** the e-Apostille can be delivered electronically.

- **Given** step 1 "Upload Document" (PDF, JPEG, TIFF; max 10 MB), **when** no file is attached, **then** Continue is disabled.
- **Given** step 2 "Recipients", **then** the first recipient is pre-filled from the customer and I can add up to 10.
- **Given** any recipient lacks first name, last name or a valid email, or any recipient after the first lacks a destination country, **when** I continue, **then** that card expands with inline errors.
- **When** I select "Preview Document & Continue", **then** a preview opens with Keep Editing (returns with data intact) and Add to Order.
- **When** I confirm, **then** a toast reads "Successfully added digital Apostille — A digital Apostille was added to your order."

## OBF-6 Add a digital Apostille — In-Person order
**As a** customer with an in-person order, **I want** to add digital recipients only, **so that** I receive the e-Apostille without uploading anything.

- **Given** an In-Person order, **then** the modal shows recipients only with "No document upload is needed for in-person orders."
- **Then** the same recipient validation and 10-recipient limit as OBF-5 apply.
- **When** I add, **then** the digital item is created with the success toast.

## OBF-7 See the twin in the Order Summary
**As a** customer, **I want** the new item to appear with its own format and fees, **so that** I know what each copy costs.

- **When** a twin is added, **then** it appears directly under its original with its own document ID and the item count in the "N Apostille(s)" badge increases by one.
- **Then** each row shows Description (name, ID, "In-Person (Appointment)" tag when applicable), State Fee, State Service Fee, AX Fee with a Digital or Paper badge beneath it, and Actions.
- **Given** an In-Person row without online fees, **then** the badge sits in the fee area, centered and level with the action buttons — never inside Actions.
- **Then** fee columns and the right-hand totals include the twin immediately; International Fee appears only when one applies.
- **Then** both rows are visible at 1280px without horizontal scroll; narrower screens scroll the table.

## OBF-8 Document upload required for digital items
**As a** customer, **I want** to be stopped from paying if a digital item has no document, **so that** the order isn't submitted incomplete.

- **Given** a digital item with no file, **then** it shows "Document upload required" and an "Upload document" action.
- **When** I attach a file, **then** the warning clears for that row.
- **When** I select Pay with any upload missing, **then** submission is blocked and the banner reads "Upload the document for each digital Apostille you added before you pay."

## OBF-9 Edit one format without affecting the other
**As a** customer, **I want** to edit either copy independently, **so that** I can correct details for just that format.

- **When** I select Edit on a row, **then** the panel opens titled "[Document] • [ID]".
- **When** I save, **then** changes apply to that item only and a toast reads "Successfully updated information."
- **Given** a twin, **then** its recipients, mailing and return address, service type and description can change without altering the original.
- **Then** the format (Digital/Paper) cannot be switched from the edit panel.

## OBF-10 Remove a format
**As a** customer, **I want** to delete either copy, **so that** I can return to a single format.

- **Given** only one item remains, **then** Delete is disabled.
- **When** I delete a twin and confirm, **then** the original's add controls and the banner reappear.
- **When** I delete an original that has a twin, **then** the twin remains as a standalone item.
- **Then** totals and the item count update immediately.

## OBF-11 Limits and eligibility
**As a** customer, **I want** the system to enforce limits, **so that** I can't build an invalid order.

- **Given** the order has 35 items, **then** add controls and the banner are hidden and "Add New Apostille" is disabled.
- **Given** an item already has a twin, **then** a second twin cannot be added.
- **Given** an order mixes In-Person and online items, **then** "due now" and "due at appointment" amounts are shown correctly.

## OBF-12 Pay and confirm both formats
**As a** customer, **I want** one payment and a confirmation covering both formats, **so that** I can track each copy.

- **When** I select Pay with all requirements met, **then** the button shows a loading state and one charge is made for the combined total.
- **Then** the confirmation lists each item as its own child order with its own order number and format-specific delivery instructions, and the receipt shows the card's last four digits.
- **Then** the digital child order carries the entered recipients; the paper child order carries fulfilment type, tracking number, mailing and return address.
- **Then** Order Overview lists both child orders and each opens in Order Details.
- **Then** Back to Orders and Download Receipt work.

---

## Out of scope
- More than one twin per item.
- Changing a twin's format after creation.
- Editing the parent order's state or delivery option from the payment page.
