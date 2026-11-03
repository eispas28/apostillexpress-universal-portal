# Payment Page — Edit Order Drawer: User Stories

Entry: Payment page → order row → **Edit order** (pencil). Drawer title: "Edit Order · Document N". Tabs: Order Info, Customer Info, Document Info, Recipient Info (digital only), Mailing Info (paper only). Footer: Cancel, Save Changes.

---

## 1. Open the drawer
As a customer, I want to edit an order from the payment page without leaving it, so that I can fix mistakes before paying.
- Clicking the edit icon opens a right-side drawer over the payment page; the page behind is dimmed.
- Title shows "Edit Order" with the document number as subtitle.
- Fields are prefilled with the order's current values; Order Info is the default tab.
- Esc, the close control, or the scrim closes the drawer (see story 9).

## 2. Edit order information
As a customer, I want to change the apostille request, delivery method, and fulfilment type, so that the order matches what I need.
- Apostille Request: Regular or Adoption; Adoption reveals a required Adoption Agency field.
- Delivery Method: Digital (e-Apostille), Traditional, or Both Formats (when enabled).
- Switching to Traditional or Both shows Fulfilment Type; "Prepaid label" requires a Tracking Number.
- Switching to Digital removes the mailing and return-address requirements and the Mailing Info tab; switching to Traditional or Both adds them.
- Service Type is read-only in practice (Same-Day only).

## 3. Edit customer information
As a customer, I want to correct my contact details on one order, so that the Competent Authority can reach the right person.
- Required: First Name, Last Name, Email. Optional: Phone, Organization, Title.
- Address is optional for digital orders ("Add Address (optional)") and required for paper orders.
- Removing the address clears all address fields.

## 4. Edit document information
As a customer, I want to correct the document details, so that the apostille is issued for the right document and country.
- Name on Document, Document Type (required), Description (required; free text when type is "Other"), Destination Country (required).
- Changing Document Type resets Description.
- Paper orders show the Return Address section; missing required return-address fields show a danger alert and a warning icon on the tab.

## 5. Replace the uploaded document
As a customer, I want to replace or add the uploaded file, so that the Authority receives a clear copy.
- Digital online orders require an uploaded file; the Document Info tab shows a warning icon until one is attached.
- Order Info shows a "Document upload needed" notice with **Upload document** (jumps to the Document tab and focuses the uploader) and **Dismiss**.
- Removing the file re-triggers the missing-file state and disables Save Changes.

## 6. Edit recipients (digital)
As a customer, I want to add, edit, or remove recipients on a digital order, so that the e-Apostille is emailed to the right people.
- Recipients appear as collapsible cards; the newest expands, others collapse with name, email, and country summary.
- Add Recipient up to 11; the button disables at the limit.
- Recipient #1 cannot be deleted; others can.

## 7. Edit mailing information (paper)
As a customer, I want to set or fix the mailing address for a paper apostille, so that it arrives at the right place.
- Required: First Name, Last Name, Email, Address Line 1, Country, State, City, Zip.
- "Use My Profile Information" fills from the profile; "Clear Fields" is disabled when empty.
- Missing info shows a red "Mailing information is missing" bar, a warning icon on the tab, and a "Mailing address needed" notice on Order Info with **Add mailing info** and **Dismiss**.

## 8. Save changes
As a customer, I want confirmation that my edit saved, so that I trust the change.
- Save Changes is disabled until all required fields on every tab are valid.
- On save: the drawer closes, the order row and totals on the payment page update, and a success toast "Document N updated" appears.
- Changing delivery method updates the row's format badge and the fee total.

## 9. Cancel without saving
As a customer, I want to close the drawer without keeping edits, so that I can back out safely.
- Cancel, Esc, close, or scrim click closes the drawer and discards changes; the order is unchanged.
- No toast is shown.

## 10. Find what's missing
As a customer, I want incomplete tabs flagged, so that I know where to fix problems.
- Warning icons appear on Mailing Info, Document Info (missing file or return address).
- Notices on Order Info link straight to the tab with the problem.
- Save Changes stays disabled until every flagged issue is resolved.

## Open questions
- Should Cancel confirm when there are unsaved edits?
- Should changing delivery method warn that fees will change?
- Are Order Info fields editable on copied orders (`orderEditable`) or only on originals?
