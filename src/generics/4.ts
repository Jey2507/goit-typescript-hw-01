type UserDate = {
      name: string;
      surname: string;
      email: string;
      password: string;
    }
    
    function createOrUpdateUser(initialValues: Partial<UserDate>): void{
        // Оновлення користувача
        console.log('User updated with values:', initialValues);
    }
    
    createOrUpdateUser({ 
      email: 'user@mail.com', 
      password: 'password123' 
    });
    