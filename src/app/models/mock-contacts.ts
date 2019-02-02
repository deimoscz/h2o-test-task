import { ContactModel } from './contact.model';


export const MOCK_CONTACTS: ContactModel[] = [
    'Ilia Lisunov',
    'Aaron Lisunov',
    'Adam Acer',
    'Scott Anderson',
    'Mary Arthur',
    'Stuart Asmussen',
    'Trevor Atwater',
    'Slobhan Auchulter',
    'Mac Barter',
    'Neal Becker',
    'Jeremy Bee',
    'Gregor Bingen',
    'Maxwell Broca',
    'Reena Bushanda',
    'Harold Curtis',
    'Maxine Cromwell',
    'Jesse Avila',
    'Burl Saner',
    'Deonna Kriss',
    'Andreas Storck',
    'Philip Cantero',
    'Josie Owens',
    'Mirtha Doolan',
    'Jerold Lainez',
    'Sau Osman',
    'Jackqueline Cropp',
    'Aurelio Ehrlich',
    'Tereasa Scales',
    'Arlinda Acuna',
    'Lynette Simonetti',
    'Bernie Vales',
    'Jonell Perrett',
    'Virgilio Brookes',
    'Marvin Kulig',
    'Ferne Salguero',
    'Karolyn Kamp',
    'Elvera Toler',
    'Deidra Elzy',
    'Tammy Laws',
    'Elidia Belding',
    'Gwenn Bazaldua',
    'Donald Gentry',
    'Caitlin Ham',
    'Georgetta Dobrowolski',
    'Sena Perdomo',
    'Neal Sokoloff',
    'Hilary Champine',
    'Rashida Mcneilly',
    'Ernestine Jolley',
    'Van Durney',
    'Nidia Abadie',
    'Tashina Gabor',
    'Genevie Ruffing',
    'Arron Wedeking',
    'Eliza Gerdts',
    'Danial Stufflebeam',
    'Griselda Choate',
    'Delta Lacher',
    'Charita Patterson',
    'Penni Shumaker',
    'Teresa Collom',
    'Usha Ruano',
    'Buffy Tedrick',
    'Jeanice Castano',
    'Shalonda Penley',
    'Lora Shontz'
].map(generateMockContact);

/**
 * Simple generator for mock ContactModel records based on provided person
 * full name. This is mock-only function, so there is a limitation that
 * full name should contain only two words.
 */
function generateMockContact(name: string, index: number): ContactModel {
    // Use the first word as a first name and the second words as a last name.
    const [firstName, lastName] = name.split(' ');
    const id = index + 1;
    return {
        id,
        firstName,
        lastName,
        phone: '7' + Math.random().toString().slice(2, 11),
        email: name.replace(/ /g, '-').toLowerCase() + '@h2o.ai',
        address: `${98 + id} Weiland Way\nCupertino CA 95014\nUnited States`,
        note: id % 2 ? `${name} California address.` : ''
    };
}
