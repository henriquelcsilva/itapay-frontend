'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/Card';
import { ArrowLeft } from 'lucide-react';
import { customersAPI, type CreateCustomerInput } from '@/lib/api';

export default function NewCustomerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<CreateCustomerInput>({
    type: 'individual',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    taxId: '',
    address: {
      street: '',
      city: '',
      state: '',
      postal_code: '',
      country: 'US',
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const customer = await customersAPI.create(formData);
      console.log('Customer created:', customer);
      alert(`Cliente criado com sucesso! ID: ${customer.id}`);
      router.push('/customers');
    } catch (err: any) {
      console.error('Error creating customer:', err);
      setError(err.response?.data?.message || err.message || 'Erro ao criar cliente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-3xl mx-auto px-8 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            icon={ArrowLeft}
          >
            Voltar
          </Button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Novo Cliente</CardTitle>
            <p className="text-sm text-dark-500 mt-1">
              Preencha os dados para criar um novo cliente
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {/* Tipo de Cliente */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Tipo de Cliente *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'individual' })}
                    className={`p-4 border-2 rounded-lg text-left transition-colors ${
                      formData.type === 'individual'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-dark-200 hover:border-dark-300'
                    }`}
                  >
                    <p className="font-medium text-dark-900">Pessoa Física</p>
                    <p className="text-xs text-dark-500">Individual</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'business' })}
                    className={`p-4 border-2 rounded-lg text-left transition-colors ${
                      formData.type === 'business'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-dark-200 hover:border-dark-300'
                    }`}
                  >
                    <p className="font-medium text-dark-900">Pessoa Jurídica</p>
                    <p className="text-xs text-dark-500">Business</p>
                  </button>
                </div>
              </div>

              {/* Nome */}
              {formData.type === 'individual' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Primeiro Nome *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Sobrenome *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1234567890"
                  className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Data de Nascimento */}
              {formData.type === 'individual' && (
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Data de Nascimento *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              )}

              {/* Tax ID */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  {formData.type === 'individual' ? 'SSN' : 'EIN'} *
                </label>
                <input
                  type="text"
                  value={formData.taxId}
                  onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                  placeholder={formData.type === 'individual' ? '123-45-6789' : '12-3456789'}
                  className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Endereço */}
              <div className="space-y-4 pt-4 border-t border-dark-100">
                <h3 className="font-medium text-dark-900">Endereço</h3>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Rua *
                  </label>
                  <input
                    type="text"
                    value={formData.address.street}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      address: { ...formData.address, street: e.target.value }
                    })}
                    className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      value={formData.address.city}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        address: { ...formData.address, city: e.target.value }
                      })}
                      className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Estado *
                    </label>
                    <input
                      type="text"
                      value={formData.address.state}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        address: { ...formData.address, state: e.target.value }
                      })}
                      placeholder="CA"
                      className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    CEP *
                  </label>
                  <input
                    type="text"
                    value={formData.address.postal_code}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      address: { ...formData.address, postal_code: e.target.value }
                    })}
                    placeholder="94303"
                    className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  loading={loading}
                  className="flex-1"
                >
                  Criar Cliente
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
