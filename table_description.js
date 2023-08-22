let tableDescription = [
        {
            "Salesforce_Accounts": {
              "TABLE_DESCRIPTION": "This table stores information about Salesforce Accounts. It includes details such as the account name, description, billing information, phone, website, industry, revenue, number of employees, ownership details, and timestamps.",
              "ID": "A unique identifier for each account in the 'Salesforce_Accounts' table. Data type: bigint(11). This is the primary key of the table.",
              "NAME": "The name of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "DESCRIPTION": "A description of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "BILLINGSTREET": "The billing street address of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "BILLINGCITY": "The billing city of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "BILLINGSTATE": "The billing state of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "BILLINGPOSTALCODE": "The billing postal code of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "BILLINGCOUNTRY": "The billing country of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "PHONE": "The phone number of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "WEBSITE": "The website URL of the account in the 'Salesforce_Accounts' table. Data type: text.",
              "INDUSTRY": "The industry that the account operates in, in the 'Salesforce_Accounts' table. Data type: enum. The values can be 'Banking', 'Biotechnology', 'Communications', 'Engineering', 'Finance', 'Healthcare', 'Insurance', 'Manufacturing', 'Media', 'Other', 'Retail', 'Shipping', 'Technology', 'Transportation'.",
              "ANNUALREVENUE": "The annual revenue of the account in the 'Salesforce_Accounts' table. Data type: bigint(20).",
              "NUMBEROFEMPLOYEES": "The number of employees at the account in the 'Salesforce_Accounts' table. Data type: enum. The values can be '<50', '50-100', '100-500', '500-1000', '1000-2500', '2500+'.",
              "OWNERID": "The identifier for the owner of the account in the 'Salesforce_Accounts' table. Data type: bigint(11). This is a foreign key that references the 'ID' in the 'Salesforce_Users' table.",
              "ASSIGNED_SDR__C": "Foreign key that refers to the 'ID' field in the 'Salesforce_Users' table. This represents the Sales Development Representative (SDR) assigned to the account. Data type: bigint(11)",
              "ASSIGNED_CSM__C": "Foreign key that refers to the 'ID' field in the 'Salesforce_Users' table. This represents the Customer Success Manager (CSM) assigned to the account. Data type: bigint(11)",
              "CREATEDAT": "The timestamp for when the account was created in the 'Salesforce_Accounts' table. Data type: datetime."
            }
        },          
        {
            "Salesforce_Contacts": {
              "TABLE_DESCRIPTION": "This table stores information about Salesforce Contacts. It includes details such as the contact's first name, last name, email, mailing information, phone, title, ownership details, account ID, and timestamps.",
              "ID": "A unique identifier for each contact in the 'Salesforce_Contacts' table. Data type: bigint(11). This is the primary key of the table.",
              "FIRSTNAME": "The first name of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "LASTNAME": "The last name of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "EMAIL": "The email address of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "MAILINGSTREET": "The mailing street address of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "MAILINGCITY": "The mailing city of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "MAILINGSTATE": "The mailing state of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "MAILINGPOSTALCODE": "The mailing postal code of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "MAILINGCOUNTRY": "The mailing country of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "PHONE": "The phone number of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "TITLE": "The title of the contact in the 'Salesforce_Contacts' table. Data type: text.",
              "OWNERID": "The identifier for the owner of the contact in the 'Salesforce_Contacts' table. Data type: bigint(11). This is a foreign key that references the 'ID' in the 'Salesforce_Users' table.",
              "ACCOUNTID": "The identifier for the associated account of the contact in the 'Salesforce_Contacts' table. Data type: bigint(11). This is a foreign key that references the 'ID' in the 'Salesforce_Accounts' table.",
              "CREATEDAT": "The timestamp for when the contact was created in the 'Salesforce_Contacts' table. Data type: datetime."
            }
        },          
        {
            "Salesforce_Opportunities": {
              "TABLE_DESCRIPTION": "This table stores information about Salesforce Opportunities. It includes details such as the opportunity's name, description, amount, stage name, ownership details, account ID, timestamps, and the date when the opportunity was closed.",
              "ID": "A unique identifier for each opportunity in the 'Salesforce_Opportunities' table. Data type: bigint(11). This is the primary key of the table.",
              "NAME": "The name of the opportunity in the 'Salesforce_Opportunities' table. Data type: text.",
              "DESCRIPTION": "A description of the opportunity in the 'Salesforce_Opportunities' table. Data type: text.",
              "AMOUNT": "The amount of the opportunity in the 'Salesforce_Opportunities' table. Data type: bigint(20).",
              "STAGENAME": "The stage name of the opportunity in the 'Salesforce_Opportunities' table. This can be 'Closed Won', 'Qualification', 'Need Analysis', 'Proposal', 'Negotiation', or 'Closed Lost'. Data type: enum.",
              "OWNERID": "The identifier for the owner of the contact in the 'Salesforce_Contacts' table. Data type: bigint(11). This is a foreign key that references the 'ID' in the 'Salesforce_Users' table.",
              "ACCOUNTID": "The identifier for the associated account of the contact in the 'Salesforce_Contacts' table. Data type: bigint(11). This is a foreign key that references the 'ID' in the 'Salesforce_Accounts' table.",
              "CREATEDAT": "The timestamp for when the opportunity was created in the 'Salesforce_Opportunities' table. Data type: datetime.",
              "CLOSEDATE": "The date when the opportunity was closed in the 'Salesforce_Opportunities' table. Data type: datetime."
            }
        },
        {
            "Salesforce_Tickets": {
              "TABLE_DESCRIPTION": "This table stores information about Salesforce Tickets. It includes details such as the ticket's subject, description, priority level, stage name, associated account ID, contact ID, timestamps, and the date when the ticket was closed.",
              "ID": "A unique identifier for each ticket in the 'Salesforce_Tickets' table. Data type: bigint(11). This is the primary key of the table.",
              "SUBJECT": "The subject of the ticket in the 'Salesforce_Tickets' table. Data type: text.",
              "DESCRIPTION": "A description of the ticket in the 'Salesforce_Tickets' table. Data type: text.",
              "PRIORITY": "The priority of the ticket in the 'Salesforce_Tickets' table. This can be 'High', 'Medium', or 'Low'. Data type: enum.",
              "STAGENAME": "The stage name of the ticket in the 'Salesforce_Tickets' table. This can be 'Open', 'In Progress', or 'Closed'. Data type: enum.",
              "ACCOUNTID": "The identifier for the associated account of the ticket in the 'Salesforce_Tickets' table. Data type: bigint(11). This is a foreign key that references the 'ID' in the 'Salesforce_Accounts' table.",
              "CONTACTID": "The identifier for the associated contact of the ticket in the 'Salesforce_Tickets' table. Data type: bigint(11). This is a foreign key that references the 'ID' in the 'Salesforce_Contacts' table.",
              "CREATEDAT": "The timestamp for when the ticket was created in the 'Salesforce_Tickets' table. Data type: datetime.",
              "CLOSEDATE": "The date when the ticket was closed in the 'Salesforce_Tickets' table. Data type: datetime."
            }
        },
        {
            "Salesforce_Users": {
              "TABLE_DESCRIPTION": "This table stores information about Salesforce Users. It includes details such as the user's first name, last name, email, and title.",
              "ID": "A unique identifier for each user in the 'Salesforce_Users' table. Data type: bigint(11). This is the primary key of the table.",
              "FIRSTNAME": "The first name of the user in the 'Salesforce_Users' table. Data type: text.",
              "LASTNAME": "The last name of the user in the 'Salesforce_Users' table. Data type: text.",
              "EMAIL": "The email of the user in the 'Salesforce_Users' table. Data type: text.",
              "TITLE": "The title of the user in the 'Salesforce_Users' table. Data type: text."
            }
        }            
    ]
